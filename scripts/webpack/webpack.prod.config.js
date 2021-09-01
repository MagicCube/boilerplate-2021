const path = require('path');

const { merge } = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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

const styleRule = common.module.rules.find(
  (r) => r.use?.indexOf('style-loader') === 0
);
if (styleRule) {
  styleRule.use[0] = MiniCssExtractPlugin.loader;
}

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[fullhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});
