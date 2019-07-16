/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'file-loader',
      {
        publicPath: '/assets/images',
        outputPath: null,
      },
    ],
  ],
});

module.exports = require('./server.jsx');
