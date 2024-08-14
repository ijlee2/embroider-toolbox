import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-modifier/typescript/input');
const outputProject = convertFixtureToJson('run-generate-modifier/typescript/output');

export { inputProject, outputProject };
