/* eslint-disable import/no-extraneous-dependencies */
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
        preprocessCss: 'D:/my-portfolio/src/sass-loader.js',
        generateScopedName: '[name]__[local]',
      },
    ],
  ],
});

module.exports = require('./server.jsx');
