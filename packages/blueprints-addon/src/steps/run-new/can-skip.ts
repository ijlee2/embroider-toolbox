import { existsSync } from 'node:fs';
import { join } from 'node:path';

import type { Options } from '../../types/run-new.js';

export function canSkip(options: Options): boolean {
  const { addon, projectRoot } = options;

  return existsSync(join(projectRoot, addon.location, 'package.json'));
}
