import { readPackageJson } from '@codemod-utils/json';

import type { CodemodOptions, Options } from '../../types/run-generate.js';

function getAddonName(codemodOptions: CodemodOptions): string {
  const { projectRoot } = codemodOptions;

  const packageJson = readPackageJson({
    projectRoot,
  });

  return packageJson['name']!;
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { entity, projectRoot, testAppLocation } = codemodOptions;

  return {
    addon: {
      name: getAddonName(codemodOptions),
    },
    entity,
    projectRoot,
    testApp: {
      location: testAppLocation,
    },
  };
}
