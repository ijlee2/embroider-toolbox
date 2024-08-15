import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runGenerate } from '../../../../src/index.js';
import type { CodemodOptions } from '../../../../src/types/run-generate.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-generate-modifier/function/index.js';

const fixtureRoot = 'tmp/run-generate-modifier/function';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'function',
    name: 'my/example-1',
    type: 'modifier',
  },
  projectRoot: `${fixtureRoot}/packages/ui/button`,
  testAppLocation: '../../../test-app',
};

test('index | run-generate | modifier > function', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
