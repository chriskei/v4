module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [ 'xo', 'plugin:solid/recommended' ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'capitalized-comments': 'off',
    'comma-dangle': [ 'error', 'never' ],
    complexity: 'off',
    indent: [ 'error', 2 ],
    'max-depth': [ 'error', 10 ],
    'max-len': [ 'error', { code: 100 } ],
    'object-curly-newline': [ 'error', { minProperties: 2 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'error',
    'no-warning-comments': 'off',
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    semi: [ 'error', 'always' ],
    'spaced-comment': 'off'
  }
};
