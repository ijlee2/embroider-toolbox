import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-helper/class/input');
const outputProject = convertFixtureToJson('run-generate-helper/class/output');

export { inputProject, outputProject };
