import { doubleColonize } from '@codemod-utils/ember';
import { findFiles } from '@codemod-utils/files';

import type {
  Options,
  PackageType,
  ProjectDataEntities,
} from '../../types/index.js';

const SOURCE = {
  node: undefined,
  'v1-addon': 'addon',
  'v1-app': 'app',
  'v2-addon': 'src',
  'v2-app': 'app',
} as const;

const ENTITY_TYPES = [
  'components',
  'helpers',
  'modifiers',
  'services',
] as const;

export function analyzeEntities(
  packageRoot: string,
  packageType: PackageType,
  options: Options,
): ProjectDataEntities {
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

  const { componentStructure } = options;

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

      if (componentStructure === 'nested') {
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
