const common = require('./webpack.common.config');

function findLoader(name, config = common) {
  let loader = config.module.rules.find((r) => {
    r.loader === name;
  });
  if (!loader) {
    config.module.rules.forEach((r) => {
      if (Array.isArray(r.use)) {
        loader = r.use.find((u) => typeof u === 'object' && u.loader === name);
      }
    });
  }
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

function snakeCase(s) {
  const result = s
    .replace(/(?:^|\.?)([A-Z])/g, (x, y) => '-' + y.toLowerCase())
    .replace(/^-/, '');
  return result;
}

module.exports = {
  findLoader,
  findPlugin,
  mergeLoaderOptions,
  mergePluginOptions,
  snakeCase,
};
