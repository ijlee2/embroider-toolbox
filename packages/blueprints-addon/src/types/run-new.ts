type CodemodOptions = {
  location: string;
  name: string;
  projectRoot: string;
};

type Options = {
  addon: {
    location: string;
    name: string;
  };
  projectRoot: string;
};

export type { CodemodOptions, Options };
