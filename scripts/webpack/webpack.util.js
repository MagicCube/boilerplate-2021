const common = require('./webpack.common.config');

function findLoader(name, config = common) {
  const loader = config.module.rules.find((r) => r.loader === name);
  return loader;
}

function findPlugin(className, config = common) {
  const plugin = config.plugins.find((p) => p.constructor.name === className);
  return plugin;
}

module.exports = {
  findLoader,
  findPlugin,
};
