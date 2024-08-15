import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-component/glimmer/input');
const outputProject = convertFixtureToJson('run-generate-component/glimmer/output');

export { inputProject, outputProject };
