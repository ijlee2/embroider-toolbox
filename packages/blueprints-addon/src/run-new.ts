import { createAddon, createOptions } from './steps/run-new/index.js';
import type { CodemodOptions } from './types/run-new.js';

export function runNew(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  createAddon(options);
}
