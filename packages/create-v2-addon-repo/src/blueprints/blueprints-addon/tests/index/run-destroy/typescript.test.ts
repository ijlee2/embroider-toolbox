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
      name: 'my-example/glimmer',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/template-tag',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/class',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/function',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/class',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/function',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/class',
      type: 'service',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runDestroy({
    entity: {
      name: 'my-example/function',
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
