import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-modifier/typescript/input');
const outputProject = convertFixtureToJson('run-destroy-modifier/typescript/output');

export { inputProject, outputProject };
