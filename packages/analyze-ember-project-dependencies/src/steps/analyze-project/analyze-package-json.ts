import type { PackageJson } from '@codemod-utils/json';

import type { PackageName, PackageType } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EmberAddon = Record<string, any>;

function getPackageType({
  dependencies,
  devDependencies,
  emberAddon,
}: {
  dependencies: Set<PackageName>;
  devDependencies: Set<PackageName>;
  emberAddon?: EmberAddon;
}): PackageType {
  if (emberAddon) {
    return emberAddon['version'] === 2 ? 'v2-addon' : 'v1-addon';
  }

  if (devDependencies.has('ember-source') || dependencies.has('ember-source')) {
    return 'app';
  }

  return 'node';
}

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

  const packageType = getPackageType({
    dependencies,
    devDependencies,
    emberAddon: packageJson['ember-addon'] as EmberAddon,
  });

  return {
    dependencies,
    devDependencies,
    packageType,
  };
}
