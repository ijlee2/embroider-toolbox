import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import {
  createEntity,
  createOptions,
  createTestFile,
  updateBarrelFile,
  updateTemplateRegistry,
} from './steps/run-generate/index.js';
import type { CodemodOptions, Options } from './types/run-generate.js';

function entityExists(options: Options): boolean {
  const { entity, projectRoot } = options;

  const filePaths = findFiles(
    join('src', `${entity.type}s`, `${entity.name}.*`),
    { projectRoot },
  );

  return filePaths.length > 0;
}

export function runGenerate(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (entityExists(options)) {
    return;
  }

  createEntity(options);
  updateBarrelFile(options);
  updateTemplateRegistry(options);
  createTestFile(options);
}
