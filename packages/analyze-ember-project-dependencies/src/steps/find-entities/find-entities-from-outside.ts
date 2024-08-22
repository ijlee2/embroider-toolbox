import type { Entities, EntityType } from '../../types/index.js';
import { KNOWN_ENTITIES } from '../../utils/find-entities/index.js';

export function findEntitiesFromOutside(): Entities {
  const entities: Entities = {
    components: new Map(),
    componentsDoubleColonized: new Map(),
    helpers: new Map(),
    modifiers: new Map(),
    services: new Map(),
  };

  for (const [packageName, packageDataEntries] of KNOWN_ENTITIES) {
    for (const [entityType, entityNames] of Object.entries(
      packageDataEntries,
    )) {
      entityNames.forEach((entityName) => {
        entities[entityType as EntityType].set(entityName, packageName);
      });
    }
  }

  return entities;
}
