import type { PackageType } from '@codemod-utils/package-json';

type CodemodOptions = {
  componentStructure: 'flat' | 'nested';
  projectRoot: string;
};

type Options = {
  componentStructure: 'flat' | 'nested';
  projectRoot: string;
};

type PackageName = string;

type PackageAnalysis = {
  dependencies: Set<PackageName>;
  unknowns: Set<string>;
};

type PackageData = {
  dependencies: Set<PackageName>;
  devDependencies: Set<PackageName>;
  entities: ProjectDataEntities;
  packageRoot: string;
  packageType: PackageType;
};

type EntityName = string;

type EntityType =
  | 'components'
  | 'componentsDoubleColonized'
  | 'helpers'
  | 'modifiers'
  | 'services';

type Entities = Record<EntityType, Map<EntityName, PackageName>>;

type ProjectDataEntities = Record<EntityType, EntityName[]>;

type ProjectData = Map<PackageName, PackageData>;

type ProjectDependencies = Map<PackageName, PackageAnalysis>;

export type {
  CodemodOptions,
  Entities,
  EntityName,
  EntityType,
  Options,
  PackageAnalysis,
  PackageData,
  PackageName,
  PackageType,
  ProjectData,
  ProjectDataEntities,
  ProjectDependencies,
};
