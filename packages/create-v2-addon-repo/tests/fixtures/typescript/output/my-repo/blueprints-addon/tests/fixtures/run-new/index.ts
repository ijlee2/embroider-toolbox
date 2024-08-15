import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-new/input');
const outputProject = convertFixtureToJson('run-new/output');

export { inputProject, outputProject };
