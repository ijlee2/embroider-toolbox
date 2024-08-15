import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-util/function/input');
const outputProject = convertFixtureToJson('run-destroy-util/function/output');

export { inputProject, outputProject };
