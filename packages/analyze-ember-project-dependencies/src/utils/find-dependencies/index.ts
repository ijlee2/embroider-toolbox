import type { Entities, PackageAnalysis } from '../../types/index.js';
import { analyzeClass } from './analyze-class.js';
import { analyzeTemplate } from './analyze-template.js';
import { analyzeTemplateTag } from './analyze-template-tag.js';

export const patterns = {
  node: ['**/*.{js,ts}', '*.{js,ts}'],
  'v1-addon': [
    'addon/**/*.{gjs,gts,hbs,js,ts}',
    'addon-test-support/**/*.{js,ts}',
    'tests/**/*.{gjs,gts,js,ts}',
    '*.{js,ts}',
  ],
  'v1-app': [
    'app/**/*.{gjs,gts,hbs,js,ts}',
    'tests/**/*.{gjs,gts,js,ts}',
    '*.{js,ts}',
  ],
  'v2-addon': ['src/**/*.{gjs,gts,hbs,js,ts}', '*.{cjs,js,mjs,ts}'],
  'v2-app': [
    'app/**/*.{gjs,gts,hbs,js,ts}',
    'tests/**/*.{gjs,gts,js,ts}',
    '*.{js,ts}',
  ],
};

export type Data = {
  entities: Entities;
  filePath: string;
  packageName: string;
};

export function analyzeFile(file: string, data: Data): PackageAnalysis {
  const { filePath } = data;

  if (filePath.endsWith('.gjs') || filePath.endsWith('.gts')) {
    return analyzeTemplateTag(file, data);
  }

  if (filePath.endsWith('.hbs')) {
    return analyzeTemplate(file, data);
  }

  return analyzeClass(file, data);
}
