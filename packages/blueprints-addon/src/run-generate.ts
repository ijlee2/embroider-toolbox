import { createEntity, createOptions } from './steps/run-generate/index.js';
import type { CodemodOptions } from './types/run-generate.js';

export function runGenerate(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  createEntity(options);
}
