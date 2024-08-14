import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'component',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-component/typescript',
};

const options: Options = {
  blueprint: 'component',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-component/typescript',
};

export { codemodOptions, options };
