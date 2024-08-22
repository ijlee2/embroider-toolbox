import { AST } from '@codemod-utils/ast-javascript';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-class.js';
import { getDependency, ignore } from './module/index.js';

export function findRequireStatements(
  file: string,
  data: Data,
): PackageAnalysis {
  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const traverse = AST.traverse(data.isTypeScript);

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
  });

  return {
    dependencies,
    unknowns,
  };
}
