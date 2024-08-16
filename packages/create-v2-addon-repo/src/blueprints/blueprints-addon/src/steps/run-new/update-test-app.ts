import { join } from 'node:path';

import type { Options } from '../../types/run-new.js';
import {
  updatePackageJson,
  updateTypes,
} from './update-docs-and-test-apps/index.js';

export function updateTestApp(options: Options): void {
  const { projectRoot, testApp } = options;

  const appRoot = join(projectRoot, testApp.location);

  updatePackageJson(appRoot, options);
  updateTypes(appRoot, options);
}
