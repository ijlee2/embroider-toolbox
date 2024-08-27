import { AST } from '@codemod-utils/ast-javascript';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../index.js';

const MODULE_PREFIXES_TO_IGNORE: string[] = [
  '.',
  '..',
  '@ember/',
  '@glimmer/',
  'node:',
];

function getDependency(moduleName: string): string {
  const tokens = moduleName.split('/');

  if (moduleName.startsWith('@')) {
    return `${tokens[0]}/${tokens[1]}`;
  }

  return `${tokens[0]}`;
}

function ignore(moduleName: string): boolean {
  if (moduleName.startsWith('dummy')) {
    return true;
  }

  if (
    MODULE_PREFIXES_TO_IGNORE.some((prefix) => moduleName.startsWith(prefix))
  ) {
    return true;
  }

  return false;
}

export function findModules(file: string, data: Data): PackageAnalysis {
  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const isTypeScript = data.filePath.endsWith('.ts');
  const traverse = AST.traverse(isTypeScript);

  traverse(file, {
    visitCallExpression(node) {
      let moduleName: string | undefined;

      switch (node.value.callee.type) {
        case 'Identifier': {
          if (node.value.callee.name === 'require') {
            moduleName = node.value.arguments[0].value as string;
          }

          break;
        }

        case 'MemberExpression': {
          if (
            node.value.callee.object.name === 'require' &&
            node.value.callee.property.name === 'resolve'
          ) {
            moduleName = node.value.arguments[0].value as string;
          }

          break;
        }
      }

      if (moduleName === undefined) {
        return false;
      }

      if (ignore(moduleName)) {
        return false;
      }

      dependencies.add(getDependency(moduleName));

      return false;
    },

    visitExportAllDeclaration(node) {
      if (node.value.source === null) {
        return false;
      }

      const moduleName = node.value.source.value as string;

      if (ignore(moduleName)) {
        return false;
      }

      dependencies.add(getDependency(moduleName));

      return false;
    },

    visitExportNamedDeclaration(node) {
      if (node.value.source === null) {
        return false;
      }

      const moduleName = node.value.source.value as string;

      if (ignore(moduleName)) {
        return false;
      }

      dependencies.add(getDependency(moduleName));

      return false;
    },

    visitImportDeclaration(node) {
      const moduleName = node.value.source.value as string;

      if (ignore(moduleName)) {
        return false;
      }

      dependencies.add(getDependency(moduleName));

      return false;
    },
  });

  return {
    dependencies,
    unknowns,
  };
}
