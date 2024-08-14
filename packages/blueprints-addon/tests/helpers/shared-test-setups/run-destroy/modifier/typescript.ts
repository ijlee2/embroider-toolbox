import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'modifier',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-modifier/typescript',
};

const options: Options = {
  blueprint: 'modifier',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-modifier/typescript',
};

export { codemodOptions, options };
