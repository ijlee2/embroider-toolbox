import type { Entities, EntityType, ProjectData } from '../types/index.js';
import {
  findEntitiesFromOutside,
  findEntitiesFromRepo,
} from './find-entities/index.js';

function mergeEntities(
  entitiesFromOutside: Entities,
  entitiesFromRepo: Entities,
): Entities {
  function mergeByType(entityType: EntityType): Map<string, string> {
    return new Map(
      [
        ...entitiesFromOutside[entityType],
        ...entitiesFromRepo[entityType],
      ].sort(),
    );
  }

  return {
    components: mergeByType('components'),
    componentsDoubleColonized: mergeByType('componentsDoubleColonized'),
    helpers: mergeByType('helpers'),
    modifiers: mergeByType('modifiers'),
    services: mergeByType('services'),
  };
}

export function findEntities(projectData: ProjectData): Entities {
  const entitiesFromOutside = findEntitiesFromOutside();
  const entitiesFromRepo = findEntitiesFromRepo(projectData);

  return mergeEntities(entitiesFromOutside, entitiesFromRepo);
}
