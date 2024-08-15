import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-helper/function/input');
const outputProject = convertFixtureToJson('run-destroy-helper/function/output');

export { inputProject, outputProject };
