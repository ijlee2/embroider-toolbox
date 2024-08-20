type EntityType =
  | {
      blueprint:
        | 'glimmer-loose'
        | 'glimmer-strict'
        | 'template-only-loose'
        | 'template-only-strict';
      type: 'component';
    }
  | {
      blueprint: 'class' | 'function';
      type: 'helper';
    }
  | {
      blueprint: 'class' | 'function';
      type: 'modifier';
    }
  | {
      blueprint: 'class';
      type: 'service';
    }
  | {
      blueprint: 'function';
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
    camelizedName: string;
    classifiedName: string;
    doubleColonizedName: string;
    name: string;
  };
  projectRoot: string;
  testApp: {
    location: string;
    name: string;
    useTemplateTag: boolean;
  };
};

export type { CodemodOptions, Options };
