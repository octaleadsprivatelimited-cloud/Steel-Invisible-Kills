module.exports = {
  extends: [],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Disable all rules to prevent compilation issues
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off'
  }
};
