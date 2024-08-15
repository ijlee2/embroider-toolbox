import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import { createEntity, createOptions } from './steps/run-generate/index.js';
import type { CodemodOptions, Options } from './types/run-generate.js';

function entityExists(options: Options): boolean {
  const { entity, projectRoot } = options;

  const files = findFiles(join('src', `${entity.type}s`, `${entity.name}.*`), {
    projectRoot,
  });

  return files.length > 0;
}

export function runGenerate(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (entityExists(options)) {
    return;
  }

  createEntity(options);
}
