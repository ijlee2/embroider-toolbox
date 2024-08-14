import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  blueprint: 'service',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-service/typescript',
};

const options: Options = {
  blueprint: 'service',
  name: 'my/example-1',
  projectRoot: 'tmp/run-generate-service/typescript',
};

export { codemodOptions, options };
