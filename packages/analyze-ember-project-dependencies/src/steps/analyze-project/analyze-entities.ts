import { doubleColonize } from '@codemod-utils/ember';
import { findFiles } from '@codemod-utils/files';

import type { PackageType, ProjectDataEntities } from '../../types/index.js';

const SOURCE = {
  app: 'app',
  node: undefined,
  'v1-addon': 'addon',
  'v2-addon': 'src',
} as const;

const ENTITY_TYPES = [
  'components',
  'helpers',
  'modifiers',
  'services',
] as const;

const NESTED_COMPONENT_STRUCTURE = true;

export function analyzeEntities(options: {
  packageRoot: string;
  packageType: PackageType;
}): ProjectDataEntities {
  const { packageRoot, packageType } = options;

  const source = SOURCE[packageType];

  const entities: ProjectDataEntities = {
    components: [],
    componentsDoubleColonized: [],
    helpers: [],
    modifiers: [],
    services: [],
  };

  if (source === undefined) {
    return entities;
  }

  ENTITY_TYPES.forEach((entityType) => {
    const filePaths = findFiles(
      `${source}/${entityType}/**/*.{gjs,gts,hbs,js,ts}`,
      {
        ignoreList: ['**/*.d.ts'],
        projectRoot: packageRoot,
      },
    );

    let entityNames = filePaths.map((filePath) => {
      return filePath
        .replace(new RegExp(`^${source}/${entityType}/`), '')
        .replace(/\.(gjs|gts|hbs|js|ts)$/, '');
    });

    if (entityType === 'components') {
      entityNames = Array.from(new Set(entityNames));

      if (NESTED_COMPONENT_STRUCTURE) {
        entityNames = entityNames.map((entityName) => {
          return entityName.replace(/\/index$/, '');
        });
      }

      entities['components'] = entityNames;
      entities['componentsDoubleColonized'] = entityNames.map(doubleColonize);

      return;
    }

    entities[entityType] = entityNames;
  });

  return entities;
}
