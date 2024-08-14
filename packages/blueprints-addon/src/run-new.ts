import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { createAddon, createOptions } from './steps/run-new/index.js';
import type { CodemodOptions, Options } from './types/run-new.js';

function addonExists(options: Options): boolean {
  const { addon, projectRoot } = options;

  return existsSync(join(projectRoot, addon.location, 'package.json'));
}

export function runNew(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);

  if (addonExists(options)) {
    return;
  }

  createAddon(options);
}
