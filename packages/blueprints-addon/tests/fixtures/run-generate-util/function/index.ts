import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-util/function/input');
const outputProject = convertFixtureToJson('run-generate-util/function/output');

export { inputProject, outputProject };
