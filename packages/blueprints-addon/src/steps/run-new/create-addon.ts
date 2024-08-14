import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../../types/run-new.js';
import { blueprintsRoot } from '../../utils/blueprints.js';

function resolveBlueprintFilePath(
  blueprintFilePath: string,
  options: Options,
): string {
  const { addon } = options;

  return blueprintFilePath
    .replace('__addonLocation__', addon.location)
    .replace('__gitignore__', '.gitignore');
}

export function createAddon(options: Options): void {
  const cwd = join(blueprintsRoot, 'run-new');

  const blueprintFilePaths = findFiles('**/*', {
    projectRoot: cwd,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = resolveBlueprintFilePath(blueprintFilePath, options);

      const blueprintFile = readFileSync(join(cwd, blueprintFilePath), 'utf8');

      const file = processTemplate(blueprintFile, {
        options,
      });

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
}
