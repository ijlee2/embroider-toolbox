import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'helper',
  },
  projectRoot: 'tmp/run-destroy-helper/typescript',
};

const options: Options = {
  entity: {
    name: 'my/example-1',
    type: 'helper',
  },
  projectRoot: 'tmp/run-destroy-helper/typescript',
};

export { codemodOptions, options };
