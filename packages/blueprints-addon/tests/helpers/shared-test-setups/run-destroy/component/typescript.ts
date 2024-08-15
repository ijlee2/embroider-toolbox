import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'component',
  },
  projectRoot: 'tmp/run-destroy-component/typescript',
};

const options: Options = {
  entity: {
    name: 'my/example-1',
    type: 'component',
  },
  projectRoot: 'tmp/run-destroy-component/typescript',
};

export { codemodOptions, options };
