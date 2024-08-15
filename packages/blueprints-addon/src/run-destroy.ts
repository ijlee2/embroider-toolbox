import { createOptions, removeEntity } from './steps/run-destroy/index.js';
import type { CodemodOptions } from './types/run-destroy.js';

export function runDestroy(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  removeEntity(options);
}
