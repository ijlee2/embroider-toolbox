type CodemodOptions = {
  blueprint: 'component' | 'helper' | 'modifier' | 'service' | 'util';
  name: string;
  projectRoot: string;
};

type Options = {
  blueprint: 'component' | 'helper' | 'modifier' | 'service' | 'util';
  name: string;
  projectRoot: string;
};

export type { CodemodOptions, Options };
