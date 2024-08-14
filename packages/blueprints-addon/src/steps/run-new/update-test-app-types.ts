import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { AST } from '@codemod-utils/ast-javascript';

import type { Options } from '../../types/run-new.js';

function addImportStatement(file: string, options: Options): string {
  const { addon } = options;

  const traverse = AST.traverse(true);

  const ast = traverse(file);

  // @ts-expect-error: Assume that types from external packages are correct
  const nodes = ast.program.body;

  const importStatementNode = AST.builders.importDeclaration(
    [
      AST.builders.importDefaultSpecifier(
        AST.builders.identifier(`${addon.pascalCaseName}Registry`),
      ),
    ],
    AST.builders.literal(`${addon.name}/template-registry`),
    'type',
  );

  nodes.splice(0, 0, importStatementNode);

  return AST.print(ast);
}

function updateRegistry(file: string, options: Options): string {
  const { addon } = options;

  const traverse = AST.traverse(true);

  const ast = traverse(file, {
    visitTSModuleDeclaration(path) {
      const moduleName = path.value.id.value as string;

      if (moduleName !== '@glint/environment-ember-loose/registry') {
        return false;
      }

      const exportStatement = path.value.body.body.find(
        (node: { type: string }) => {
          return node.type === 'ExportDefaultDeclaration';
        },
      );

      const registriesToExtend: string[] = (
        exportStatement.declaration.extends ?? []
      ).map((node: { expression: { name: string } }) => {
        return node.expression.name;
      });

      exportStatement.declaration.extends = [
        ...registriesToExtend,
        `${addon.pascalCaseName}Registry`,
      ].sort();

      return false;
    },
  });

  return AST.print(ast);
}

export function updateTestAppTypes(options: Options): void {
  const { projectRoot, testApp } = options;

  const oldPath = join(projectRoot, testApp.location, 'types/global.d.ts');
  const oldFile = readFileSync(oldPath, 'utf8');

  let newFile = addImportStatement(oldFile, options);
  newFile = updateRegistry(newFile, options);

  writeFileSync(oldPath, newFile, 'utf8');
}
