import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'modifier',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-modifier/typescript',
};

const options: Options = {
  blueprint: 'modifier',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-modifier/typescript',
};

export { codemodOptions, options };
