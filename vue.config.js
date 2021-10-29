const isDev = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: isDev ? "" : "/umis-website/dist",
  configureWebpack: {
    output: {
      filename:
        process.env.NODE_ENV === "production"
          ? "[name].[chunkhash].js"
          : "[name].js",
      chunkFilename: "[name].[chunkhash].js"
    },
    resolve: {
      alias: {
        "@umis-renderer": "../../../umis-renderer"
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:1026",
        changeOrigin: true
      },
      "/ajax": {
        target: "http://kadm.test.weibo.com",
        changeOrigin: true
      }
    }
  }
};
