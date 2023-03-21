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
    indent: [ 'error', 2 ],
    'comma-dangle': [ 'error', 'never' ],
    'max-depth': [ 'error', 10 ],
    'max-len': [ 'error', { code: 100 } ],
    'object-curly-newline': [ 'error', { minProperties: 2 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'error',
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    semi: [ 'error', 'always' ]
  }
};
