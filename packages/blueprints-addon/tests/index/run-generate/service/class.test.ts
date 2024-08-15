import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runGenerate } from '../../../../src/index.js';
import type { CodemodOptions } from '../../../../src/types/run-generate.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-generate-service/class/index.js';

const fixtureRoot = 'tmp/run-generate-service/class';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'class',
    name: 'my/example-1',
    type: 'service',
  },
  projectRoot: `${fixtureRoot}/packages/ui/button`,
  testAppLocation: '../../../test-app',
};

test('index | run-generate | service > class', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
