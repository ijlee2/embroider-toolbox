import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  name: 'my-repo',
  projectRoot: 'tmp/typescript',
};

const options: Options = {
  project: {
    name: 'my-repo',
  },
  projectRoot: 'tmp/typescript',
};

export { codemodOptions, options };
