import type { PackageAnalysis } from '../../types/index.js';
import { extractClass } from '../ast/template-tag.js';
import { analyzeClass } from './analyze-class.js';
import type { Data } from './index.js';

export function analyzeTemplateTag(file: string, data: Data): PackageAnalysis {
  const newFile = extractClass(file);

  const newData = {
    ...data,
    filePath: data.filePath.replace(/\.gjs$/, '.js').replace(/\.gts$/, '.ts'),
  };

  return analyzeClass(newFile, newData);
}
