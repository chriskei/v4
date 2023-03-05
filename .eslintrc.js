module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'plugin:solid/recommended'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'max-len': ['error', { code: 80 }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
  },
};
