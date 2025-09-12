import { getPackageType, type PackageJson } from '@codemod-utils/package-json';

import type { PackageName } from '../../types/index.js';

export function analyzePackageJson(packageJson: PackageJson) {
  const dependencies = new Set<PackageName>(
    [
      ...Object.keys(packageJson['dependencies'] ?? {}),
      ...Object.keys(packageJson['peerDependencies'] ?? {}),
    ].sort(),
  );

  const devDependencies = new Set<PackageName>(
    [...Object.keys(packageJson['devDependencies'] ?? {})].sort(),
  );

  const packageType = getPackageType(packageJson);

  return {
    dependencies,
    devDependencies,
    packageType,
  };
}
