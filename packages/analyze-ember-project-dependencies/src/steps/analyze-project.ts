import type { Options } from '../types/index.js';
import { getPackageRoots } from './analyze-project/index.js';

export function analyzeProject(options: Options) {
  const packageRoots = getPackageRoots(options);

  console.log(new Set(packageRoots));
}
