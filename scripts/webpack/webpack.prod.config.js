const { merge } = require('webpack-merge');

const common = require('./webpack.common.config');
const { mergePluginOptions } = require('./webpack.util');

mergePluginOptions('HtmlWebpackPlugin', {
  minify: {
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  },
});

module.exports = merge(common, {
  mode: 'production',
});
