import type { CodemodOptions, Options } from '../types/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { name, projectRoot } = codemodOptions;

  return {
    project: {
      name,
    },
    projectRoot,
  };
}
