import { createOptions } from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function analyzeEmberProjectDependencies(
  codemodOptions: CodemodOptions,
): void {
  const options = createOptions(codemodOptions);

  console.log(options);
}
