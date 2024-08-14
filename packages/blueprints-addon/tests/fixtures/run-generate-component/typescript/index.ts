import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-component/typescript/input');
const outputProject = convertFixtureToJson('run-generate-component/typescript/output');

export { inputProject, outputProject };
