import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { blueprintsRoot } from '../utils/blueprints.js';

function resolveBlueprintFilePath(blueprintFilePath: string): string {
  return blueprintFilePath.replace('__gitignore__', '.gitignore');
}

export function createFilesFromBlueprints(options: Options): void {
  const { project } = options;

  const blueprintFilePaths = findFiles('**/*', {
    projectRoot: blueprintsRoot,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = join(
        project.name,
        resolveBlueprintFilePath(blueprintFilePath),
      );

      const blueprintFile = readFileSync(
        join(blueprintsRoot, blueprintFilePath),
        'utf8',
      );

      const file = processTemplate(blueprintFile, {
        options,
      });

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
}
