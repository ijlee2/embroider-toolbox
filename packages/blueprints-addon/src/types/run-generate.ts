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
  testAppLocation: string;
};

type Options = {
  addon: {
    name: string;
  };
  entity: EntityType & {
    name: string;
  };
  projectRoot: string;
  testApp: {
    location: string;
  };
};

export type { CodemodOptions, Options };
