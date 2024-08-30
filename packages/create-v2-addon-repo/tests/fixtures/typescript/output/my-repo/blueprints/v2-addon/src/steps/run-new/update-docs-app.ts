import { join } from 'node:path';

import type { Options } from '../../types/run-new.js';
import {
  updateEmberCliBuild,
  updatePackageJson,
  updateTypes,
} from './update-docs-and-test-apps/index.js';

export function updateDocsApp(options: Options): void {
  const { docsApp, projectRoot } = options;

  const appRoot = join(projectRoot, docsApp.location);

  updateEmberCliBuild(appRoot, options);
  updatePackageJson(appRoot, options);
  updateTypes(appRoot, options);
}
