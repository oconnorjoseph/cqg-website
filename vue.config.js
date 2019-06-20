const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: "cu/cqg/",
  pwa: {
    name: "Columbia Quant Group",
    manifestPath: "manifest.json",
    themeColor: "#1a1a1a",
    msTileColor: "#000000",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      msTileImage: "img/icons/msapplication-icon-144x144.png"
    }
  },
  integrity: true,
  configureWebpack: {
    plugins: [new GenerateSW()]
  }
};
