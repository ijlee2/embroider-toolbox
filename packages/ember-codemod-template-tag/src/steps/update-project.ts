import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { updateComponents } from './update-project/index.js';

export function updateProject(options: Options) {
  const { projectRoot } = options;

  const src = ['app/components/**/*.hbs'];

  const filePaths = findFiles(src, {
    projectRoot,
  });

  filePaths.forEach((filePath) => {
    const oldPath = join(projectRoot, filePath);
    const oldFile = readFileSync(oldPath, 'utf8');

    const newFile = updateComponents(oldFile);

    writeFileSync(oldPath, newFile, 'utf8');
  });
}
