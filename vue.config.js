const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';

const dllReference = (config) => {
  config.plugin('vendorDll')
    .use(webpack.DllReferencePlugin, [{
      context: __dirname,
      manifest: require('./dist/dll/vendor.manifest.json')
    }]);
  config.plugin('addAssetHtml')
    .use(AddAssetHtmlPlugin, [
      [
        {
          filepath: require.resolve(path.resolve(__dirname, 'dist/dll/vendor.dll.js')),
          outputPath: 'dist/dll',
          publicPath: '/dist/dll'
        }
      ]
    ])
    .after('html');
};

module.exports = {
  publicPath: isDev ? './' : '/umis-website/dist',
  configureWebpack: {
    output: {
      filename: '[name].[hash:6].js',
      chunkFilename: '[name].[hash:6].js',
    },
    resolve: {
      alias: {
        '@umis-renderer': '../../../umis-renderer'
      }
    },
    optimization: {
      minimize: !isDev
    }
  },
  chainWebpack(config) {
    if(process.env.NODE_ENV === 'production'){
      dllReference(config);
    }
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      },
      '/ajax': {
        target: 'http://kadm.test.weibo.com',
        changeOrigin: true
      }
    }
  }
};
