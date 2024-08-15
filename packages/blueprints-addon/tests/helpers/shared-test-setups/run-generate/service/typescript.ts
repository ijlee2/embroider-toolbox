import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'service',
  },
  projectRoot: 'tmp/run-generate-service/typescript',
};

const options: Options = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'service',
  },
  projectRoot: 'tmp/run-generate-service/typescript',
};

export { codemodOptions, options };
