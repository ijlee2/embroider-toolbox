import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-modifier/class/input');
const outputProject = convertFixtureToJson('run-generate-modifier/class/output');

export { inputProject, outputProject };
