import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'service',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-service/typescript',
};

const options: Options = {
  blueprint: 'service',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-service/typescript',
};

export { codemodOptions, options };
