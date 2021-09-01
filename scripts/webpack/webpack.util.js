const common = require('./webpack.common.config');

function findLoader(name, config = common) {
  const loader = config.module.rules.find((r) => r.loader === name);
  return loader;
}

function findPlugin(className, config = common) {
  const plugin = config.plugins.find((p) => p.constructor.name === className);
  return plugin;
}

function mergeLoaderOptions(name, options, config = common) {
  const loader = findLoader(name, config);
  if (loader) {
    loader.options = { ...loader.options, ...options };
  }
}

function mergePluginOptions(className, options, config = common) {
  const plugin = findPlugin(className, config);
  if (plugin) {
    plugin.userOptions = {
      ...plugin.userOptions,
      ...options,
    };
  }
}

module.exports = {
  findLoader,
  findPlugin,
  mergeLoaderOptions,
  mergePluginOptions,
};
