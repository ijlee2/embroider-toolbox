'use strict';

require('@shared-configs/eslint-config-ember/patch');

module.exports = {
  extends: ['@shared-configs/eslint-config-ember/v2-addon'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  overrides: [
    // TypeScript files
    {
      files: ['**/*.{gts,ts}'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'error',
      },
    },
    // JavaScript files
    {
      files: ['**/*.{cjs,js,gjs,mjs}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
