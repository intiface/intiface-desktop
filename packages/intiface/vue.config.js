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
};
