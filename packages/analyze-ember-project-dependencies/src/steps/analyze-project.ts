import { getPackageRoots } from '@codemod-utils/files';
import { readPackageJson } from '@codemod-utils/json';

import type { Options, ProjectData } from '../types/index.js';
import {
  analyzeEntities,
  analyzePackageJson,
} from './analyze-project/index.js';

export function analyzeProject(options: Options) {
  const packageRoots = getPackageRoots(options);

  const projectData: ProjectData = new Map();

  packageRoots.forEach((packageRoot) => {
    const packageJson = readPackageJson({ projectRoot: packageRoot });

    if (!packageJson['name']) {
      return;
    }

    const { dependencies, devDependencies, packageType } =
      analyzePackageJson(packageJson);

    const entities = analyzeEntities(packageRoot, packageType, options);

    projectData.set(packageJson['name'], {
      dependencies,
      devDependencies,
      entities,
      packageRoot,
      packageType,
    });
  });

  return new Map([...projectData].sort());
}
