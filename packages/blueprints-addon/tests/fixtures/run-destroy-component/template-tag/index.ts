import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-destroy-component/template-tag/input');
const outputProject = convertFixtureToJson('run-destroy-component/template-tag/output');

export { inputProject, outputProject };
