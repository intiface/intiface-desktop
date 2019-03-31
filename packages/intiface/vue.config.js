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
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.nonpolynomiallabs.intiface-desktop",
        copyright: "Copyright © 2019 Nonpolynomial Labs, LLC",
        artifactName: "${name}-${version}-${os}-${arch}.${ext}",
      },
    },
  },
};
