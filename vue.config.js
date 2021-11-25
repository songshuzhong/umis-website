const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin');
const isDev = process.env.NODE_ENV === "development";

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const dllReference = (config) => {
  config.plugin('vendorDll')
    .use(webpack.DllReferencePlugin, [{
      context: __dirname,
      manifest: require('./dll/vendor.manifest.json')
    }])
  config.plugin('addAssetHtml')
    .use(AddAssetHtmlPlugin, [
      [
        {
          filepath: require.resolve(path.resolve(__dirname, 'dll/vendor.dll.js')),
          outputPath: 'dll',
          publicPath: '/dll'
        }
      ]
    ])
    .after('html')
};

module.exports = {
  publicPath: isDev ? "" : "/umis-website/dist",
  configureWebpack: {
    entry: {
      vendor: ['vue', 'vue-router', 'element-ui', 'axios']
    },
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
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  },
  chainWebpack(config) {
    if(process.env.NODE_ENV === 'production'){
      dllReference(config)
    }
  },
  devServer: {
    port: 80,
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
