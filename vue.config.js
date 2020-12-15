const path = require("path");

module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat',
      importAll: true
    }
  },
  transpileDependencies: [
    'quasar',
    /[\\/]node_modules[\\/]quasar-framework[\\/]/
  ],
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./main.js")
      .end();
    config.resolve.alias.set("@", __dirname);
    config.resolve.alias.set(
      "variables",
      path.join(__dirname, "./styles/quasar.variables.styl")
    );
  }
}
