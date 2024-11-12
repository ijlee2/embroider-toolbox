import { Preprocessor } from 'content-tag';

export function extractClass(file: string): string {
  const preprocessor = new Preprocessor();

  return preprocessor.process(file).code;
}
