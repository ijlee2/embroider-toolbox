import { AST } from '@codemod-utils/ast-template';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-template.js';

export function findModifiers(file: string, data: Data): PackageAnalysis {
  const { modifiers } = data.entities;

  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const traverse = AST.traverse();

  traverse(file, {
    ElementModifierStatement(node) {
      if (node.path.type !== 'PathExpression') {
        return;
      }

      const modifierName = node.path.original;

      if (modifierName.includes('.')) {
        return;
      }

      const dependency = modifiers.get(modifierName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Modifier - ${modifierName} (${data.filePath})`);
      }
    },
  });

  return {
    dependencies,
    unknowns,
  };
}
