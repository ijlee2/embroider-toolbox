import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
  convertToMap,
  convertToObject,
  type PackageJson,
  readPackageJson,
} from '@codemod-utils/json';

import type { Options } from '../../types/run-new.js';

function updateDevDependencies(
  packageJson: PackageJson,
  options: Options,
): void {
  const { addon } = options;

  const devDependencies = convertToMap(packageJson['devDependencies']);

  devDependencies.set(addon.name, 'workspace:*');

  packageJson['devDependencies'] = convertToObject(devDependencies);
}

export function updateTestAppPackageJson(options: Options): void {
  const { projectRoot, testApp } = options;

  const testAppRoot = join(projectRoot, testApp.location);

  if (!existsSync(join(testAppRoot, 'package.json'))) {
    return;
  }

  const packageJson = readPackageJson({
    projectRoot: testAppRoot,
  });

  updateDevDependencies(packageJson, options);

  const destination = join(testAppRoot, 'package.json');
  const file = JSON.stringify(packageJson, null, 2) + '\n';

  writeFileSync(destination, file, 'utf8');
}
