import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-modifier/function/input');
const outputProject = convertFixtureToJson('run-generate-modifier/function/output');

export { inputProject, outputProject };
