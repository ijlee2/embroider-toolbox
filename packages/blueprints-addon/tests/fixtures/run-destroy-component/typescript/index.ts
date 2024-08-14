import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-component/typescript/input');
const outputProject = convertFixtureToJson('run-destroy-component/typescript/output');

export { inputProject, outputProject };
