const MODULE_PREFIXES_TO_IGNORE: string[] = [
  '.',
  '..',
  '@ember/',
  '@glimmer/',
  'node:',
];

export function getDependency(moduleName: string): string {
  const tokens = moduleName.split('/');

  if (moduleName.startsWith('@')) {
    return `${tokens[0]}/${tokens[1]}`;
  }

  return `${tokens[0]}`;
}

export function ignore(moduleName: string): boolean {
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
