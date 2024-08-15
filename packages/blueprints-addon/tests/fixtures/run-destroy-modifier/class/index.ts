import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-modifier/class/input');
const outputProject = convertFixtureToJson('run-destroy-modifier/class/output');

export { inputProject, outputProject };
