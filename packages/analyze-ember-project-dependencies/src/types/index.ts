type CodemodOptions = {
  projectRoot: string;
};

type Options = {
  projectRoot: string;
};

type PackageName = string;

type PackageData = {
  dependencies: Set<PackageName>;
  devDependencies: Set<PackageName>;
  entities: ProjectDataEntities;
  packageRoot: string;
  packageType: PackageType;
};

type PackageType = 'app' | 'node' | 'v1-addon' | 'v2-addon';

type EntityName = string;

type EntityType =
  | 'components'
  | 'componentsDoubleColonized'
  | 'helpers'
  | 'modifiers'
  | 'services';

type ProjectDataEntities = Record<EntityType, EntityName[]>;

type ProjectData = Map<PackageName, PackageData>;

export type {
  CodemodOptions,
  EntityName,
  EntityType,
  Options,
  PackageData,
  PackageName,
  PackageType,
  ProjectData,
  ProjectDataEntities,
};
