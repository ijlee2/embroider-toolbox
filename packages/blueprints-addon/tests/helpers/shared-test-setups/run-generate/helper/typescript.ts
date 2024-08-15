import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'helper',
  },
  projectRoot: 'tmp/run-generate-helper/typescript',
};

const options: Options = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'helper',
  },
  projectRoot: 'tmp/run-generate-helper/typescript',
};

export { codemodOptions, options };
