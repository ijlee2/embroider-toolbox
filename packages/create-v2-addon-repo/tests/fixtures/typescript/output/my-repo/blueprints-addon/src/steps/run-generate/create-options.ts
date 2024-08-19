import { join } from 'node:path';

import { classify, doubleColonize } from '@codemod-utils/ember-cli-string';
import { readPackageJson } from '@codemod-utils/json';

import type { CodemodOptions, Options } from '../../types/run-generate.js';

function getPackageName(projectRoot: string): string {
  const packageJson = readPackageJson({ projectRoot });

  return packageJson['name']!;
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { entity, projectRoot, testAppLocation } = codemodOptions;

  const classifiedName = classify(entity.name);
  const camelizedName = `${classifiedName.charAt(0).toLowerCase()}${classifiedName.substring(1)}`;
  const doubleColonizedName = doubleColonize(entity.name);

  return {
    addon: {
      name: getPackageName(projectRoot),
    },
    entity: {
      ...entity,
      camelizedName,
      classifiedName,
      doubleColonizedName,
    },
    projectRoot,
    testApp: {
      location: testAppLocation,
      name: getPackageName(join(projectRoot, testAppLocation)),
      useTemplateTag: true,
    },
  };
}
