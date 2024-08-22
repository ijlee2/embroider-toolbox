import type { Entities, PackageAnalysis } from '../../types/index.js';
import {
  findExportStatements,
  findImportStatements,
  findRequireStatements,
  findServices,
} from './in-class/index.js';

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
  const resultsForExportStatements = findExportStatements(file, data);
  const resultsForImportStatements = findImportStatements(file, data);
  const resultsForRequireStatements = findRequireStatements(file, data);
  const resultsForServices = findServices(file, data);

  return {
    dependencies: new Set([
      ...resultsForExportStatements.dependencies,
      ...resultsForImportStatements.dependencies,
      ...resultsForRequireStatements.dependencies,
      ...resultsForServices.dependencies,
    ]),
    unknowns: new Set([
      ...resultsForExportStatements.unknowns,
      ...resultsForImportStatements.unknowns,
      ...resultsForRequireStatements.unknowns,
      ...resultsForServices.unknowns,
    ]),
  };
}
