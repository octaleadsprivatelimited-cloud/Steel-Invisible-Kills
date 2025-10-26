module.exports = {
  extends: [
    'eslint:recommended'
  ],
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
    // Disable problematic rules that might cause build issues
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  }
};
