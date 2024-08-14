import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-new/typescript/input');
const outputProject = convertFixtureToJson('run-new/typescript/output');

export { inputProject, outputProject };
