import {
  createOptions,
  removeEntity,
  updateBarrelFile,
  updateTemplateRegistry,
} from './steps/run-destroy/index.js';
import type { CodemodOptions } from './types/run-destroy.js';

export function runDestroy(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  removeEntity(options);
  updateBarrelFile(options);
  updateTemplateRegistry(options);
}
