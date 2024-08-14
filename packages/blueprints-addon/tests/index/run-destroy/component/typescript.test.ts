import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-destroy-component/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/run-destroy/component/typescript.js';

test('index | run-destroy | component > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
