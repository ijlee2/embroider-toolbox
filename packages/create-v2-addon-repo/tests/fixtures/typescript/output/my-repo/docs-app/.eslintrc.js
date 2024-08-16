'use strict';

require('@shared-configs/eslint-config-ember/patch');

module.exports = {
  extends: ['@shared-configs/eslint-config-ember/app'],
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
      files: ['**/*.{cjs,gjs,js,mjs}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
