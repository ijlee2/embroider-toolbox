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
      blueprintType: 'glimmer',
      name: 'my/component-1',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'template-tag',
      name: 'my/component-2',
      type: 'component',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'class',
      name: 'my/helper-1',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'function',
      name: 'my/helper-2',
      type: 'helper',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'class',
      name: 'my/modifier-1',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'function',
      name: 'my/modifier-2',
      type: 'modifier',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'class',
      name: 'my/service-1',
      type: 'service',
    },
    projectRoot: `${fixtureRoot}/packages/ui/button`,
    testAppLocation: '../../../test-app',
  });

  runGenerate({
    entity: {
      blueprintType: 'function',
      name: 'my/util-1',
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
