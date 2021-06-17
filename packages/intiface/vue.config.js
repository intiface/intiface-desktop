module.exports = {
  lintOnSave: false,
  configureWebpack: {
    target: "web",
  },
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        WEBPACK_ELECTRON: process.env["npm_lifecycle_event"].indexOf("electron") !== -1
      });
      return definitions;
    });
  },
  transpileDependencies: [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      preload: "src/utils/preload.js",
      nodeIntegration: true,
      builderOptions: {
        productName: "Intiface Desktop",
        appId: "com.nonpolynomiallabs.intiface-desktop",
        copyright: "Copyright © 2020-2021 Nonpolynomia",
        artifactName: "${name}-${version}-${os}-${arch}.${ext}",
        win: {
          "timeStampServer": "http://timestamp.comodoca.com/authenticode",
          "rfc3161TimeStampServer": "http://timestamp.comodoca.com/rfc3161",
          "publisherName": ["Nonpolynomial", "Sectigo RSA Code Signing CA"],
          "target": {
            "target": "nsis",
            "arch": [
              "x64",
              "ia32"
            ],
          },
        },
        linux: {
          "target": ["AppImage", "tar.gz"],
        }
      },
    },
  },
};
