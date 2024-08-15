import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'modifier',
  },
  projectRoot: 'tmp/run-generate-modifier/typescript',
};

const options: Options = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'modifier',
  },
  projectRoot: 'tmp/run-generate-modifier/typescript',
};

export { codemodOptions, options };
