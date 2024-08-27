import { AST } from '@codemod-utils/ast-javascript';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../index.js';

function dasherize(value: string): string {
  return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

export function findServices(file: string, data: Data): PackageAnalysis {
  const { services } = data.entities;

  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const isTypeScript = data.filePath.endsWith('.ts');
  const traverse = AST.traverse(isTypeScript);

  traverse(file, {
    visitClassProperty(node) {
      if (
        !Array.isArray(node.value.decorators) ||
        node.value.decorators.length !== 1
      ) {
        return false;
      }

      const decorator = node.value.decorators[0];
      let serviceName: string | undefined;

      switch (decorator.expression.type) {
        case 'CallExpression': {
          if (decorator.expression.callee.name == 'service') {
            serviceName = decorator.expression.arguments[0].value as string;
          }

          break;
        }

        case 'Identifier': {
          if (decorator.expression.name === 'service') {
            serviceName = dasherize(node.value.key.name as string);
          }

          break;
        }
      }

      if (!serviceName) {
        return false;
      }

      const dependency = services.get(serviceName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Service - ${serviceName} (${data.filePath})`);
      }

      return false;
    },
  });

  return {
    dependencies,
    unknowns,
  };
}
