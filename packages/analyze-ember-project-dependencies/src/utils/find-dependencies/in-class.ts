import type { Entities, PackageAnalysis } from '../../types/index.js';
import { findModules, findServices } from './in-class/index.js';

export type Data = {
  entities: Entities;
  filePath: string;
  isTypeScript: boolean;
  packageName: string;
};

export function findDependenciesInClass(
  file: string,
  data: Data,
): PackageAnalysis {
  const resultsForModules = findModules(file, data);
  const resultsForServices = findServices(file, data);

  return {
    dependencies: new Set([
      ...resultsForModules.dependencies,
      ...resultsForServices.dependencies,
    ]),
    unknowns: new Set([
      ...resultsForModules.unknowns,
      ...resultsForServices.unknowns,
    ]),
  };
}
