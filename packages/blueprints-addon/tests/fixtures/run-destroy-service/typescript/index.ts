import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-service/typescript/input');
const outputProject = convertFixtureToJson('run-destroy-service/typescript/output');

export { inputProject, outputProject };
