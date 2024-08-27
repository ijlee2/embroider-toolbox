import type { PackageAnalysis } from '../../types/index.js';
import { findComponentsHelpersModifiers } from './analyze-template/index.js';
import type { Data } from './index.js';

export function analyzeTemplate(file: string, data: Data): PackageAnalysis {
  const results = findComponentsHelpersModifiers(file, data);

  return results;
}
