import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-helper/typescript/input');
const outputProject = convertFixtureToJson('run-destroy-helper/typescript/output');

export { inputProject, outputProject };
