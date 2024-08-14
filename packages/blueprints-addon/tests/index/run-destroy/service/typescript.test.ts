import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-destroy-service/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/run-destroy/service/typescript.js';

test('index | run-destroy | service > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
