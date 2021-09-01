const common = require('./webpack.common.config');

export function findLoader(name: string, config: any = common) {
  const loader = config.module.rules.find((r) => r.loader === name);
  return loader;
}

export function findPlugin(className: string, config: any = common) {
  const plugin = config.plugins.find((p) => p.constructor.name === className);
  return plugin;
}
