import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  Entities,
  ProjectData,
  ProjectDependencies,
} from '../types/index.js';
import { findDependenciesInClass } from '../utils/find-dependencies/in-class.js';
import { findDependenciesInTemplate } from '../utils/find-dependencies/in-template.js';

const patterns = {
  app: ['app/**/*.{hbs,js,ts}', 'tests/**/*.{js,ts}', '*.{js,ts}'],
  node: ['**/*.{js,ts}', '*.{js,ts}'],
  'v1-addon': [
    'addon/**/*.{hbs,js,ts}',
    'addon-test-support/**/*.{js,ts}',
    'tests/**/*.{js,ts}',
    '*.{js,ts}',
  ],
  'v2-addon': ['src/**/*.{hbs,js,ts}', '*.{cjs,js,mjs,ts}'],
};

export function findDependencies(
  projectData: ProjectData,
  entities: Entities,
): ProjectDependencies {
  const projectDependencies: ProjectDependencies = new Map();

  for (const [packageName, packageData] of projectData) {
    const { packageRoot, packageType } = packageData;

    const _dependencies = new Set<string>();
    const _unknowns = new Set<string>();

    const filePaths = findFiles(patterns[packageType], {
      ignoreList: [
        '**/declarations/**/*',
        '**/dist/**/*',
        '**/node_modules/**/*',
      ],
      projectRoot: packageRoot,
    });

    filePaths.forEach((filePath) => {
      try {
        const path = join(packageRoot, filePath);
        const file = readFileSync(path, 'utf8');

        if (filePath.endsWith('.hbs')) {
          const { dependencies, unknowns } = findDependenciesInTemplate(file, {
            entities,
            filePath,
          });

          dependencies.forEach((dependency) => _dependencies.add(dependency));
          unknowns.forEach((unknown) => _unknowns.add(unknown));

          return;
        }

        const isTypeScript = filePath.endsWith('.ts');

        const { dependencies, unknowns } = findDependenciesInClass(file, {
          entities,
          filePath,
          isTypeScript,
          packageName,
        });

        dependencies.forEach((dependency) => _dependencies.add(dependency));
        unknowns.forEach((unknown) => _unknowns.add(unknown));
      } catch (error) {
        console.log(`ERROR: Could not analyze ${filePath} from ${packageName}`);
        console.log((error as Error).message);
        console.log('\n');
      }
    });

    projectDependencies.set(packageName, {
      dependencies: new Set(Array.from(_dependencies).sort()),
      unknowns: new Set(Array.from(_unknowns).sort()),
    });
  }

  return projectDependencies;
}
