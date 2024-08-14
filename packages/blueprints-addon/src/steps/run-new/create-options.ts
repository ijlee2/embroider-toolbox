import { join } from 'node:path';

import type { CodemodOptions, Options } from '../../types/run-new.js';

function dasherize(packageName: string): string {
  return packageName.replace('@', '').replace(/\W|_/g, '-');
}

function pascalCase(packageName: string): string {
  const dasherizedName = dasherize(packageName);

  return dasherizedName
    .split('-')
    .map((token) => token.charAt(0).toUpperCase() + token.substring(1))
    .join('');
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { location, name, projectRoot } = codemodOptions;

  return {
    addon: {
      dasherizedName: dasherize(name),
      location: join('packages', location),
      name,
      pascalCaseName: pascalCase(name),
    },
    projectRoot,
    testApp: {
      location: 'test-app',
      name: 'test-app',
    },
  };
}
