import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-service/typescript/input');
const outputProject = convertFixtureToJson('run-generate-service/typescript/output');

export { inputProject, outputProject };
