import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'modifier',
  },
  projectRoot: 'tmp/run-destroy-modifier/typescript',
};

const options: Options = {
  entity: {
    name: 'my/example-1',
    type: 'modifier',
  },
  projectRoot: 'tmp/run-destroy-modifier/typescript',
};

export { codemodOptions, options };
