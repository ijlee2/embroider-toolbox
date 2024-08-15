import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'service',
  },
  projectRoot: 'tmp/run-destroy-service/typescript',
};

const options: Options = {
  entity: {
    name: 'my/example-1',
    type: 'service',
  },
  projectRoot: 'tmp/run-destroy-service/typescript',
};

export { codemodOptions, options };
