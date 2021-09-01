const { merge } = require('webpack-merge');

const common = require('./webpack.common.config');
const { findPlugin } = require('./webpack.util');

const htmlWebpackPlugin = findPlugin('HtmlWebpackPlugin');
if (htmlWebpackPlugin) {
  htmlWebpackPlugin.userOptions.minify = {
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  };
}

module.exports = merge(common, {
  mode: 'production',
});
