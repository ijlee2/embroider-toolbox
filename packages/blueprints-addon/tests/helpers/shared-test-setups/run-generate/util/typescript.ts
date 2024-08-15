import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'function',
    name: 'my/example-1',
    type: 'util',
  },
  projectRoot: 'tmp/run-generate-util/typescript',
};

const options: Options = {
  entity: {
    blueprintType: 'function',
    name: 'my/example-1',
    type: 'util',
  },
  projectRoot: 'tmp/run-generate-util/typescript',
};

export { codemodOptions, options };
