import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-helper/typescript/input');
const outputProject = convertFixtureToJson('run-generate-helper/typescript/output');

export { inputProject, outputProject };
