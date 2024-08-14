import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runNew } from '../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../fixtures/run-new/typescript/index.js';
import { codemodOptions } from '../../helpers/shared-test-setups/run-new/typescript.js';

test('index | run-new > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  runNew(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runNew(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
