import { doubleColonize } from '@codemod-utils/ember-cli-string';

import type { PackageName, ProjectDataEntities } from '../../types/index.js';
import { KNOWN_ENTITIES as _KNOWN_ENTITIES } from './known-entities.js';

const KNOWN_ENTITIES = new Map<PackageName, ProjectDataEntities>(
  [..._KNOWN_ENTITIES].map(([packageName, entities]) => {
    const components = entities.components ?? [];
    const componentsDoubleColonized = components.map(doubleColonize);
    const helpers = entities.helpers ?? [];
    const modifiers = entities.modifiers ?? [];
    const services = entities.services ?? [];

    return [
      packageName,
      {
        components,
        componentsDoubleColonized,
        helpers,
        modifiers,
        services,
      },
    ];
  }),
);

export { KNOWN_ENTITIES };
