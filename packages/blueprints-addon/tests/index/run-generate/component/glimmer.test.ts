import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runGenerate } from '../../../../src/index.js';
import type { CodemodOptions } from '../../../../src/types/run-generate.js';
import {
  inputProject,
  outputProject,
} from '../../../fixtures/run-generate-component/glimmer/index.js';

const fixtureRoot = 'tmp/run-generate-component/glimmer';

const codemodOptions: CodemodOptions = {
  entity: {
    blueprintType: 'glimmer',
    name: 'my/example-1',
    type: 'component',
  },
  projectRoot: `${fixtureRoot}/packages/ui/button`,
  testAppLocation: '../../../test-app',
};

test('index | run-generate | component > glimmer', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runGenerate(codemodOptions);

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
