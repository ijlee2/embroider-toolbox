type CodemodOptions = {
  location: string | undefined;
  name: string;
  projectRoot: string;
};

type Options = {
  addon: {
    dasherizedName: string;
    location: string;
    locationInverse: string;
    name: string;
    pascalizedName: string;
  };
  docsApp: {
    location: string;
    name: string;
  };
  projectRoot: string;
  testApp: {
    location: string;
    name: string;
  };
};

export type { CodemodOptions, Options };
