import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  location: 'ui/button',
  name: '@my-org-ui/button',
  projectRoot: 'tmp/typescript',
};

const options: Options = {
  addon: {
    location: 'packages/ui/button',
    name: '@my-org-ui/button',
  },
  projectRoot: 'tmp/typescript',
};

export { codemodOptions, options };
