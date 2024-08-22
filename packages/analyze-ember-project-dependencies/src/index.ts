import {
  analyzeProject,
  createOptions,
  findDependencies,
  findEntities,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function analyzeEmberProjectDependencies(
  codemodOptions: CodemodOptions,
): void {
  const options = createOptions(codemodOptions);

  const projectData = analyzeProject(options);

  console.log(`✅ ${projectData.size} packages found\n`);

  const entities = findEntities(projectData);
  const projectDependencies = findDependencies(projectData, entities);

  console.log(projectDependencies);
}
