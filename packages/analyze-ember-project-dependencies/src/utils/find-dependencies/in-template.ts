import type { Entities, PackageAnalysis } from '../../types/index.js';
import {
  findComponents,
  findHelpers,
  findModifiers,
} from './in-template/index.js';

export type Data = {
  entities: Entities;
  filePath: string;
};

export function findDependenciesInTemplate(
  file: string,
  data: Data,
): PackageAnalysis {
  const resultsForComponents = findComponents(file, data);
  const resultsForHelpers = findHelpers(file, data);
  const resultsForModifiers = findModifiers(file, data);

  return {
    dependencies: new Set([
      ...resultsForComponents.dependencies,
      ...resultsForHelpers.dependencies,
      ...resultsForModifiers.dependencies,
    ]),
    unknowns: new Set([
      ...resultsForComponents.unknowns,
      ...resultsForHelpers.unknowns,
      ...resultsForModifiers.unknowns,
    ]),
  };
}
