module.exports = {
  lintOnSave: false,
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
