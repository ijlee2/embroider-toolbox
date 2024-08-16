import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runGenerate } from '../../../src/index.js';
import {
  inputProject,
  outputProject,
} from '../../fixtures/run-generate/index.js';

const fixtureRoot = 'tmp/run-generate';

function runCommands() {
  runGenerate({
    entity: {
      blueprint: 'glimmer',
      name: 'my-example/glimmer',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'template-tag',
      name: 'my-example/template-tag',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'class',
      name: 'my-example/class',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'function',
      name: 'my-example/function',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'class',
      name: 'my-example/class',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'function',
      name: 'my-example/function',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'class',
      name: 'my-example/class',
      type: 'service',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprint: 'function',
      name: 'my-example/function',
      type: 'util',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });
}

test('index | run-generate > typescript', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
