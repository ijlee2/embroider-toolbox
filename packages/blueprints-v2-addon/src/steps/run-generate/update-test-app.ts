import type { Options } from '../../types/run-generate.js';
import { createTestFile } from './update-test-app/index.js';

export function updateTestApp(options: Options): void {
  createTestFile(options);
}
