import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runNew } from '../../../src/index.js';
import type { CodemodOptions } from '../../../src/types/run-new.js';
import {
  inputProject,
  outputProject,
} from '../../fixtures/run-new/typescript/index.js';

const fixtureRoot = 'tmp/run-new/typescript';

const codemodOptions: CodemodOptions = {
  location: 'ui/button',
  name: '@my-org-ui/button',
  projectRoot: fixtureRoot,
};

test('index | run-new > typescript', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runNew(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runNew(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
