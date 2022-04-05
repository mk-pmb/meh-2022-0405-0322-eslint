'use strict';

if (module.depDetectHelper) {
  require('eslint-config-airbnb-base');
  require('@babel/eslint-parser');
}

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    'plugin:node/recommended',
  ],
  overrides: [
    {
      files: ['**.js'],
      parserOptions: { sourceType: 'script' },
    },
    {
      files: ['**.mjs'],
      rules: { 'node/no-unsupported-features/es-syntax': 'off' },
    },
    {
      files: [
        'build/**',
        'test/**',
        'tests/**',
        '**/test.*.{js,mjs}',
        '**{/,-,.}test{,s,/**}.{js,mjs}',
        '**.spec.{js,mjs}',
        '**/{,.}eslintrc.js{,on}',
        '**/webpack.config.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    allowImportExportEverywhere: true,
    requireConfigFile: false,
  },
  plugins: [
    'eslint-plugin-json-light-pmb',
    'eslint-plugin-node',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': ['error', 'as-needed'],
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'build/**',
          'test/**',
          'tests/**',
          '**/test.*.{js,mjs}',
          '**{/,-,.}test{,s,/**}.{js,mjs}',
          '**.spec.{js,mjs}',
          '**/{,.}eslintrc.js{,on}',
          '**/webpack.config.js',
        ],
      },
    ],
    'key-spacing': 'off',
    'lines-around-directive': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'no-console': 'off',
    'no-control-regex': 'off',
    'node/global-require': 'off',
    'no-div-regex': 'error',
    'no-extra-semi': 'off',
    'no-multiple-empty-lines': 'off',
    'no-multi-spaces': ['off', { ignoreEOLComments: true }],
    'no-useless-escape': 'off',
    'object-curly-newline': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-template': 'off',
    'quote-props': 'off',
    semi: ['error', 'always'],
    strict: ['error', 'safe'],
    'unicode-bom': 'off',
    'import/extensions': ['error', 'ignorePackages'],
  },
  settings: {
    'import/extensions': ['.js', '.json', '.mjs'],
    'import/resolver': {
      node: { extensions: ['.js', '.json', '.mjs'] },
    },
  },
};
