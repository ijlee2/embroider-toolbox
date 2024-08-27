import type { Entities, PackageAnalysis } from '../../types/index.js';
import { analyzeClass } from './analyze-class.js';
import { analyzeTemplate } from './analyze-template.js';

export const patterns = {
  app: ['app/**/*.{hbs,js,ts}', 'tests/**/*.{js,ts}', '*.{js,ts}'],
  node: ['**/*.{js,ts}', '*.{js,ts}'],
  'v1-addon': [
    'addon/**/*.{hbs,js,ts}',
    'addon-test-support/**/*.{js,ts}',
    'tests/**/*.{js,ts}',
    '*.{js,ts}',
  ],
  'v2-addon': ['src/**/*.{hbs,js,ts}', '*.{cjs,js,mjs,ts}'],
};

export type Data = {
  entities: Entities;
  filePath: string;
  packageName: string;
};

export function analyzeFile(file: string, data: Data): PackageAnalysis {
  const { filePath } = data;

  if (filePath.endsWith('.hbs')) {
    return analyzeTemplate(file, data);
  }

  return analyzeClass(file, data);
}
