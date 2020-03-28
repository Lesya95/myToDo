const path = require('path');

module.exports = {
    mode: 'development',
  entry: './code.js',
  output: {
    filename: 'code.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
};