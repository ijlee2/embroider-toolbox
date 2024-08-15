import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-service/class/input');
const outputProject = convertFixtureToJson('run-generate-service/class/output');

export { inputProject, outputProject };
