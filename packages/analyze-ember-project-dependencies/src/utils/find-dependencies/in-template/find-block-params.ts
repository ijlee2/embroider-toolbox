import { AST } from '@codemod-utils/ast-template';

export function findBlockParams(file: string): Set<string> {
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
