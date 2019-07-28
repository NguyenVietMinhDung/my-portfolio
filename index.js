/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'file-loader',
      {
        publicPath: 'assets/images',
        outputPath: null,
      },
    ],
    [
      'css-modules-transform',
      {
        extensions: ['.scss'],
        preprocessCss: path.resolve(__dirname, 'src/sass-loader.js'),
        generateScopedName: '[name]__[local]',
      },
    ],
  ],
});

module.exports = require('./src/server.jsx');
