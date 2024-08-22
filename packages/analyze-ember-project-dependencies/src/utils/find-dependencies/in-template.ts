import type { Entities, PackageAnalysis } from '../../types/index.js';
import { findComponentsHelpersModifiers } from './in-template/index.js';

export type Data = {
  entities: Entities;
  filePath: string;
};

export function findDependenciesInTemplate(
  file: string,
  data: Data,
): PackageAnalysis {
  const results = findComponentsHelpersModifiers(file, data);

  return results;
}
