module.exports = {
  chainWebpack: config => {
    config.module
      .rule("txt")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader");

    config.module.rules.delete("svg");
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        }
      ]
    }
  }
};
