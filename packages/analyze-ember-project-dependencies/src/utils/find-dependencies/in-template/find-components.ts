import { AST } from '@codemod-utils/ast-template';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-template.js';

function findBlockParams(file: string): Set<string> {
  const blockParams = new Set<string>();

  const traverse = AST.traverse();

  traverse(file, {
    Block(node) {
      node.blockParams.forEach((blockParam) => {
        blockParams.add(blockParam);
      });
    },

    ElementNode(node) {
      node.blockParams.forEach((blockParam) => {
        blockParams.add(blockParam);
      });
    },
  });

  return blockParams;
}

function isComponent(componentName: string): boolean {
  // Ignore HTML elements
  return new RegExp(/[A-Z]/).test(componentName.charAt(0));
}

function isHelper(path: { data: boolean; this: boolean }): boolean {
  return path.data === false && path.this === false;
}

function ignore(name: string, blockParams: Set<string>): boolean {
  if (name.includes('.')) {
    return true;
  }

  if (blockParams.has(name)) {
    return true;
  }

  return false;
}

export function findComponentsHelpersModifiers(
  file: string,
  data: Data,
): PackageAnalysis {
  const { components, componentsDoubleColonized, helpers, modifiers } =
    data.entities;

  const blockParams = findBlockParams(file);
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

    MustacheStatement(node) {
      if (node.path.type !== 'PathExpression') {
        return;
      }

      const helperName = node.path.original;

      if (!isHelper(node.path)) {
        return;
      }

      if (ignore(helperName, blockParams)) {
        return;
      }

      const dependency = helpers.get(helperName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Helper - ${helperName} (${data.filePath})`);
      }
    },

    SubExpression(node) {
      if (node.path.type !== 'PathExpression') {
        return;
      }

      const helperName = node.path.original;

      if (helperName === 'component') {
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

        return;
      }

      if (!isHelper(node.path)) {
        return;
      }

      if (ignore(helperName, blockParams)) {
        return;
      }

      const dependency = helpers.get(helperName);

      if (dependency) {
        dependencies.add(dependency);
      } else {
        unknowns.add(`Helper - ${helperName} (${data.filePath})`);
      }
    },
  });

  return {
    dependencies,
    unknowns,
  };
}
