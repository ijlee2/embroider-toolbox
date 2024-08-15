import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-helper/class/input');
const outputProject = convertFixtureToJson('run-destroy-helper/class/output');

export { inputProject, outputProject };
