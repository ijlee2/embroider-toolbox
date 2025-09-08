import { preprocess } from '@codemod-utils/ast-template-tag';

import type { PackageAnalysis } from '../../types/index.js';
import { analyzeClass } from './analyze-class.js';
import type { Data } from './index.js';

export function analyzeTemplateTag(file: string, data: Data): PackageAnalysis {
  const { javascript } = preprocess(file);

  const filePath = data.filePath
    .replace(/\.gjs$/, '.js')
    .replace(/\.gts$/, '.ts');

  return analyzeClass(javascript, {
    ...data,
    filePath,
  });
}
