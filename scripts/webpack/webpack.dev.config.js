const webpack = require('webpack');
const { merge } = require('webpack-merge');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const common = require('./webpack.common.config');

const tsLoader = common.module.rules.find((r) => r.loader === 'ts-loader');
if (tsLoader) {
  tsLoader.options = {
    ...tsLoader.options, // 可能为 undefined
    getCustomTransformers: () => ({
      before: [ReactRefreshTypeScript()],
    }),
    transpileOnly: true,
  };
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // 在这里添加需要覆盖的规则
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
