import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('my-project/input');
const outputProject = convertFixtureToJson('my-project/output');

export { inputProject, outputProject };
