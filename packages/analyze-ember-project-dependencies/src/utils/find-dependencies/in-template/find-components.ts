import { AST } from '@codemod-utils/ast-template';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-template.js';
import { findBlockParams } from './find-block-params.js';

function isComponent(componentName: string): boolean {
  // Ignore HTML elements
  return new RegExp(/[A-Z]/).test(componentName.charAt(0));
}

function ignore(componentName: string, blockParams: Set<string>): boolean {
  if (componentName.includes('.')) {
    return true;
  }

  if (blockParams.has(componentName)) {
    return true;
  }

  return false;
}

export function findComponents(file: string, data: Data): PackageAnalysis {
  const { components, componentsDoubleColonized } = data.entities;

  const blockParams = findBlockParams(file);
  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const traverse = AST.traverse();

  traverse(file, {
    ElementNode(node) {
      const componentName = node.tag;

      if (!isComponent(componentName)) {
        return;
      }

      if (ignore(componentName, blockParams)) {
        return;
      }

      const dependency = componentsDoubleColonized.get(componentName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Component - ${componentName} (${data.filePath})`);
      }
    },

    SubExpression(node) {
      if (
        node.path.type !== 'PathExpression' ||
        node.path.original !== 'component'
      ) {
        return;
      }

      if (
        node.params.length !== 1 ||
        node.params[0]!.type !== 'StringLiteral'
      ) {
        return;
      }

      const componentName = node.params[0]!.original;

      if (ignore(componentName, blockParams)) {
        return;
      }

      const dependency = components.get(componentName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Component - ${componentName} (${data.filePath})`);
      }
    },
  });

  return {
    dependencies,
    unknowns,
  };
}
