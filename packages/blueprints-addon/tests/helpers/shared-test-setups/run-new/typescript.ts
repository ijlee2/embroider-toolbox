import type { CodemodOptions, Options } from '../../../../src/types/run-new.js';

const codemodOptions: CodemodOptions = {
  location: 'ui/button',
  name: '@my-org-ui/button',
  projectRoot: 'tmp/run-new/typescript',
};

const options: Options = {
  addon: {
    dasherizedName: 'my-org-ui-button',
    location: 'packages/ui/button',
    name: '@my-org-ui/button',
    pascalCaseName: 'MyOrgUiButton',
  },
  projectRoot: 'tmp/run-new/typescript',
  testApp: {
    location: 'test-app',
    name: 'test-app',
  },
};

export { codemodOptions, options };
