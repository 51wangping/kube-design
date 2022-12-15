module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/no-find-dom-node': 0,
  },
};
