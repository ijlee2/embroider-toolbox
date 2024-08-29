import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { analyzeEmberProjectDependencies } from '../../src/index.js';
import { inputProject, outputProject } from '../fixtures/my-project/index.js';

const codemodOptions = {
  componentStructure: 'flat' as const,
  projectRoot: 'tmp/my-project',
};

test('index > my-project', function () {
  loadFixture(inputProject, codemodOptions);

  analyzeEmberProjectDependencies(codemodOptions);

  assertFixture(outputProject, codemodOptions);
});
