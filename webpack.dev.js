const merger = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merger(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});
