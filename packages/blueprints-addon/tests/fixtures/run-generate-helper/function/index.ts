import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-helper/function/input');
const outputProject = convertFixtureToJson('run-generate-helper/function/output');

export { inputProject, outputProject };
