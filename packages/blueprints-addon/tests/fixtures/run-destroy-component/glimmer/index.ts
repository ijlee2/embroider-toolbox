import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-component/glimmer/input');
const outputProject = convertFixtureToJson('run-destroy-component/glimmer/output');

export { inputProject, outputProject };
