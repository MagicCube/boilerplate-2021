const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const common = require('./webpack.common.config');

const tsLoader = common.module.rules.find((r) => r.loader === 'ts-loader');
if (tsLoader) {
  tsLoader.options = {
    ...tsLoader.options,
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
    client: {
      overlay: {
        warnings: false,
      },
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
});
