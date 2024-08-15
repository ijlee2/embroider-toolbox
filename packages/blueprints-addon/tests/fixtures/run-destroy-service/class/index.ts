import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-service/class/input');
const outputProject = convertFixtureToJson('run-destroy-service/class/output');

export { inputProject, outputProject };
