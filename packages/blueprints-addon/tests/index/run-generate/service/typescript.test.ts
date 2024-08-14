import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runGenerate } from '../../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-generate-service/typescript/index.js';
import { codemodOptions } from '../../../helpers/shared-test-setups/run-generate/service/typescript.js';

test('index | run-generate | service > typescript', function () {
  loadFixture(inputProject, codemodOptions);

  runGenerate(codemodOptions);

  assertFixture(outputProject, codemodOptions);

  // Check idempotence
  runGenerate(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
