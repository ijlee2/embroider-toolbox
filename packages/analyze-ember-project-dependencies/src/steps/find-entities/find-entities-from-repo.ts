import type { Entities, EntityType, ProjectData } from '../../types/index.js';

export function findEntitiesFromRepo(projectData: ProjectData): Entities {
  const entities: Entities = {
    components: new Map(),
    componentsDoubleColonized: new Map(),
    helpers: new Map(),
    modifiers: new Map(),
    services: new Map(),
  };

  for (const [packageName, packageData] of projectData) {
    for (const [entityType, entityNames] of Object.entries(
      packageData.entities,
    )) {
      entityNames.forEach((entityName) => {
        entities[entityType as EntityType].set(entityName, packageName);
      });
    }
  }

  return entities;
}
