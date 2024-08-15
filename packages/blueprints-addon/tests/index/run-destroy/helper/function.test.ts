import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../../src/index.js';
import type { CodemodOptions } from '../../../../src/types/run-destroy.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-destroy-helper/function/index.js';

const fixtureRoot = 'tmp/run-destroy-helper/function';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'helper',
  },
  projectRoot: `${fixtureRoot}/packages/ui/button`,
  testAppLocation: '../../../test-app',
};

test('index | run-destroy | helper > function', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runDestroy(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runDestroy(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});