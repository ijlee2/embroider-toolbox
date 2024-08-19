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
  packageRoot: string;
  packageType: PackageType;
};

type PackageType = 'app' | 'node' | 'v1-addon' | 'v2-addon';

type ProjectData = Map<PackageName, PackageData>;

export type {
  CodemodOptions,
  Options,
  PackageData,
  PackageName,
  PackageType,
  ProjectData,
};
