import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-util/typescript/input');
const outputProject = convertFixtureToJson('run-generate-util/typescript/output');

export { inputProject, outputProject };
