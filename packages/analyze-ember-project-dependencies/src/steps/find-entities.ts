import type { Entities, ProjectData } from '../types/index.js';
import { findEntitiesFromRepo } from './find-entities/index.js';

export function findEntities(projectData: ProjectData): Entities {
  const entitiesFromRepo = findEntitiesFromRepo(projectData);

  return entitiesFromRepo;
}
