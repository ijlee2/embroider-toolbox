import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runDestroy } from '../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../fixtures/run-destroy/index.js';

const fixtureRoot = 'tmp/run-destroy';

function runCommands() {
  runDestroy({
    entity: {
      name: 'my/component-1',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/component-2',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/helper-1',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/helper-2',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/modifier-1',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/modifier-2',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/service-1',
      type: 'service',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my/util-1',
      type: 'util',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });
}

test('index | run-destroy > typescript', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
