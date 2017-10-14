module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['import'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 0,
  }
};
