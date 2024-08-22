import { AST } from '@codemod-utils/ast-template';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-template.js';
import { findBlockParams } from './find-block-params.js';

function isHelper(path: { data: boolean; this: boolean }): boolean {
  return path.data === false && path.this === false;
}

function ignore(helperName: string, blockParams: Set<string>): boolean {
  if (helperName.includes('.')) {
    return true;
  }

  if (blockParams.has(helperName)) {
    return true;
  }

  return false;
}

export function findHelpers(file: string, data: Data): PackageAnalysis {
  const { helpers } = data.entities;

  const blockParams = findBlockParams(file);
  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const traverse = AST.traverse();

  traverse(file, {
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
