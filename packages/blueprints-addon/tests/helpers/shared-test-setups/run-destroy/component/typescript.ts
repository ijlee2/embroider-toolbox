import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-destroy.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'component',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-component/typescript',
};

const options: Options = {
  blueprint: 'component',
  name: 'my/example-1',
  projectRoot: 'tmp/run-destroy-component/typescript',
};

export { codemodOptions, options };
