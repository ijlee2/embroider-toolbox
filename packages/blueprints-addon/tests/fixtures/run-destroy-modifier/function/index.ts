import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-modifier/function/input');
const outputProject = convertFixtureToJson('run-destroy-modifier/function/output');

export { inputProject, outputProject };
