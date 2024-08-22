import { AST } from '@codemod-utils/ast-javascript';

import type { PackageAnalysis } from '../../../types/index.js';
import type { Data } from '../in-class.js';
import { getDependency, ignore } from './module/index.js';

export function findImportStatements(
  file: string,
  data: Data,
): PackageAnalysis {
  const dependencies = new Set<string>();
  const unknowns = new Set<string>();

  const traverse = AST.traverse(data.isTypeScript);

  traverse(file, {
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