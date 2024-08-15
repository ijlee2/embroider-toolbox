type EntityType = 'component' | 'helper' | 'modifier' | 'service' | 'util';

type CodemodOptions = {
  entity: {
    name: string;
    type: EntityType;
  };
  projectRoot: string;
};

type Options = {
  entity: {
    name: string;
    type: EntityType;
  };
  projectRoot: string;
};

export type { CodemodOptions, Options };
