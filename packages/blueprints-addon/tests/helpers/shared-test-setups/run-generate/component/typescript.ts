import type {
  CodemodOptions,
  Options,
} from '../../../../../src/types/run-generate.js';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'glimmer',
    name: 'my/example-1',
    type: 'component',
  },
  projectRoot: 'tmp/run-generate-component/typescript',
};

const options: Options = {
  entity: {
    blueprintType: 'glimmer',
    name: 'my/example-1',
    type: 'component',
  },
  projectRoot: 'tmp/run-generate-component/typescript',
};

export { codemodOptions, options };
