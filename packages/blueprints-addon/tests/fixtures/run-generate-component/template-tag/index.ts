import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('run-generate-component/template-tag/input');
const outputProject = convertFixtureToJson('run-generate-component/template-tag/output');

export { inputProject, outputProject };
