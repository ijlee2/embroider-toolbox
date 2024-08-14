import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../../types/run-new.js';
import { blueprintsRoot } from '../../utils/blueprints.js';

function resolveBlueprintFilePath(blueprintFilePath: string): string {
  return blueprintFilePath;
}

export function createFilesFromBlueprints(options: Options): void {
  const cwd = join(blueprintsRoot, 'run-new');

  const blueprintFilePaths = findFiles('**/*', {
    projectRoot: cwd,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = resolveBlueprintFilePath(blueprintFilePath);

      const blueprintFile = readFileSync(join(cwd, blueprintFilePath), 'utf8');

      const file = processTemplate(blueprintFile, {
        options,
      });

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
}
