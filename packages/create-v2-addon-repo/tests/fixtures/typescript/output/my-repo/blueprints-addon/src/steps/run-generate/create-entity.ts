import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles, parseFilePath } from '@codemod-utils/files';

import type { Options } from '../../types/run-generate.js';
import { blueprintsRoot } from '../../utils/blueprints.js';

function getData(options: Options) {
  const { name: localFileName } = parseFilePath(options.entity.name);

  return {
    localFileName,
  };
}

function resolveBlueprintFilePath(
  blueprintFilePath: string,
  options: Options,
): string {
  const { entity } = options;

  return blueprintFilePath.replace(
    '__fileName__',
    join('src', `${entity.type}s`, entity.name),
  );
}

export function createEntity(options: Options): void {
  const cwd = join(
    blueprintsRoot,
    'run-generate',
    options.entity.type,
    options.entity.blueprint,
  );

  const blueprintFilePaths = findFiles('**/*', {
    projectRoot: cwd,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = resolveBlueprintFilePath(blueprintFilePath, options);

      const blueprintFile = readFileSync(join(cwd, blueprintFilePath), 'utf8');

      const file = processTemplate(blueprintFile, {
        data: getData(options),
        options,
      });

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
}
