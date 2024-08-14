import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'util',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-util/typescript',
};

const options: Options = {
  blueprint: 'util',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-util/typescript',
};

export { codemodOptions, options };
