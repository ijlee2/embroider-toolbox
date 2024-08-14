import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'helper',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-helper/typescript',
};

const options: Options = {
  blueprint: 'helper',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-helper/typescript',
};

export { codemodOptions, options };
