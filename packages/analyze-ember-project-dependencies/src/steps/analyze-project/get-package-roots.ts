import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { Options } from '../../types/index.js';

export function getPackageRoots(options: Options): string[] {
  const { projectRoot } = options;

  const packageRoots = findFiles('**/package.json', {
    ignoreList: ['**/{dist,node_modules}/**/*'],
    projectRoot,
  }).map((filePath) => {
    return join(projectRoot, filePath.replace(/package\.json$/, ''));
  });

  const isMonorepo = packageRoots.length > 1;

  if (isMonorepo) {
    // Remove the workspace root
    return packageRoots.filter((packageRoot) => packageRoot !== projectRoot);
  }

  return packageRoots;
}
