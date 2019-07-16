/* eslint-disable import/no-extraneous-dependencies */
const merger = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merger(common, {
  mode: 'development',
});
