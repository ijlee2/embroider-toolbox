import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'util',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-util/typescript',
};

const options: Options = {
  blueprint: 'util',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-util/typescript',
};

export { codemodOptions, options };
