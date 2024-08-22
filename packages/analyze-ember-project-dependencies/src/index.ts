import {
  analyzeProject,
  createOptions,
  findDependencies,
  findEntities,
  flagAnomalies,
} from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function analyzeEmberProjectDependencies(
  codemodOptions: CodemodOptions,
): void {
  const options = createOptions(codemodOptions);

  const projectData = analyzeProject(options);

  console.log(`✅ ${projectData.size} packages found\n`);

  const entities = findEntities(projectData);

  console.log('✅ Found entities\n');

  const projectDependencies = findDependencies(projectData, entities);

  console.log('✅ Found dependencies\n');

  flagAnomalies(projectData, projectDependencies);
}
