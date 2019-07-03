const merger = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merger(common, {
  mode: 'production',
  devtool: 'source-map',
});
