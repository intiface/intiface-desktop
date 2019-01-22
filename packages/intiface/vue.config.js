module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        WEBPACK_ELECTRON: process.env["npm_lifecycle_event"].indexOf("electron") !== -1
      });
      return definitions;
    });
  },
  css: {
    loaderOptions: {
      postcss: {
        options: {
          config: {
            // This rule needs to be set so that yarn workspaces will work,
            // otherwise postcss will complain about vuetify requirements in the
            // main node_modules directory (since postcss config is in
            // packages/intiface, not in project root).
            path: './postcss.config.js',
          }
        }
      }
    }
  }
};
