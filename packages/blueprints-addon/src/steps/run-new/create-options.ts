import { join } from 'node:path';

import type { CodemodOptions, Options } from '../../types/run-new.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { location, name, projectRoot } = codemodOptions;

  return {
    addon: {
      location: join('packages', location),
      name,
    },
    projectRoot,
  };
}
