import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-destroy-modifier/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/run-destroy/modifier/typescript.js';

test('index | run-destroy | modifier > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runDestroy(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
