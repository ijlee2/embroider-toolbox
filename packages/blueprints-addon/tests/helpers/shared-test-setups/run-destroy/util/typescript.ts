import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'util',
  },
  projectRoot: 'tmp/run-destroy-util/typescript',
};

const options: Options = {
  entity: {
    name: 'my/example-1',
    type: 'util',
  },
  projectRoot: 'tmp/run-destroy-util/typescript',
};

export { codemodOptions, options };
