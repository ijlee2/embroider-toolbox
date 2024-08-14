import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-util/typescript/input');
const outputProject = convertFixtureToJson('run-destroy-util/typescript/output');

export { inputProject, outputProject };
