import {
  canSkip,
  createOptions,
  updateAddon,
  updateTestApp,
} from './steps/run-generate/index.js';
import type { CodemodOptions } from './types/run-generate.js';

export function runGenerate(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (canSkip(options)) {
    return;
  }

  updateAddon(options);
  updateTestApp(options);
}
