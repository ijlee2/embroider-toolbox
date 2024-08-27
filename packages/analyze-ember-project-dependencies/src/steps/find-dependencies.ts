import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type {
  Entities,
  ProjectData,
  ProjectDependencies,
} from '../types/index.js';
import { analyzeFile, patterns } from '../utils/find-dependencies/index.js';

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
      ignoreList: ['**/{declarations,dist,node_modules}/**/*'],
      projectRoot: packageRoot,
    });

    filePaths.forEach((filePath) => {
      try {
        const path = join(packageRoot, filePath);
        const file = readFileSync(path, 'utf8');

        const { dependencies, unknowns } = analyzeFile(file, {
          entities,
          filePath,
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
