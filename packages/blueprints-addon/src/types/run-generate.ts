type EntityType =
  | {
      blueprintType: 'glimmer' | 'template-tag';
      type: 'component';
    }
  | {
      blueprintType: 'class' | 'function';
      type: 'helper';
    }
  | {
      blueprintType: 'class' | 'function';
      type: 'modifier';
    }
  | {
      blueprintType: 'class';
      type: 'service';
    }
  | {
      blueprintType: 'function';
      type: 'util';
    };

type CodemodOptions = {
  entity: EntityType & {
    name: string;
  };
  projectRoot: string;
};

type Options = {
  entity: EntityType & {
    name: string;
  };
  projectRoot: string;
};

export type { CodemodOptions, Options };
