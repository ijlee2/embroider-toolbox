import baseConfiguration from '@shared-configs/eslint-config-node/typescript';

export default [
  {
    ignores: [
      'dist/',
      'dist-for-testing/',
      'node_modules/',
      'src/blueprints/',
      'tests/fixtures/',
      'tmp/',
      '.*/',
    ],
  },
  ...baseConfiguration,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
];
