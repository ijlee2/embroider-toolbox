type CodemodOptions = {
  location: string;
  name: string;
  projectRoot: string;
};

type Options = {
  addon: {
    dasherizedName: string;
    location: string;
    name: string;
    pascalCaseName: string;
  };
  projectRoot: string;
  testApp: {
    location: string;
    name: string;
  };
};

export type { CodemodOptions, Options };
