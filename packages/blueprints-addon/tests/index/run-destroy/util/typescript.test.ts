import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../../src/index.js';
import type { CodemodOptions } from '../../../../src/types/run-destroy.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-destroy-util/function/index.js';

const fixtureRoot = 'tmp/run-destroy-util/function';

const codemodOptions: CodemodOptions = {
  entity: {
    name: 'my/example-1',
    type: 'util',
  },
  projectRoot: `${fixtureRoot}/packages/ui/button`,
  testAppLocation: '../../../test-app',
};

test('index | run-destroy | util > function', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runDestroy(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runDestroy(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
