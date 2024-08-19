import { analyzeProject, createOptions } from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function analyzeEmberProjectDependencies(
  codemodOptions: CodemodOptions,
): void {
  const options = createOptions(codemodOptions);

  const projectData = analyzeProject(options);

  console.log(`✅ ${projectData.size} packages found\n`);

  console.log(projectData);
}
