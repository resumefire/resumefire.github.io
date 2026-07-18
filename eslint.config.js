const eslint = require('@eslint/js');

module.exports = [
  eslint.configs.recommended,
  {
    files: ['scripts.js'],
    languageOptions: {
      globals: {
        document: 'readonly'
      }
    },
    rules: {
      'no-console': 'error'
    }
  }
];
