import type { PackageAnalysis } from '../../types/index.js';
import { findModules, findServices } from './analyze-class/index.js';
import type { Data } from './index.js';

export function analyzeClass(file: string, data: Data): PackageAnalysis {
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
