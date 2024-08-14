import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'helper',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-helper/typescript',
};

const options: Options = {
  blueprint: 'helper',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-helper/typescript',
};

export { codemodOptions, options };
