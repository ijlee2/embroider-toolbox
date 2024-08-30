import type { Options } from '../../types/run-destroy.js';
import { removeTestFile } from './update-test-app/index.js';

export function updateTestApp(options: Options): void {
  removeTestFile(options);
}
