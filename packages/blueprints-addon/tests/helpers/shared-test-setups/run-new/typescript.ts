import type { CodemodOptions, Options } from '../../../../src/types/run-new.js';

const codemodOptions: CodemodOptions = {
  location: 'ui/button',
  name: '@my-org-ui/button',
  projectRoot: 'tmp/run-new/typescript',
};

const options: Options = {
  addon: {
    location: 'packages/ui/button',
    name: '@my-org-ui/button',
  },
  projectRoot: 'tmp/run-new/typescript',
};

export { codemodOptions, options };
