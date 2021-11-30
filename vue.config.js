const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';

const dllReference = (config) => {
  config.plugin('vendorDll')
    .use(webpack.DllReferencePlugin, [{
      context: __dirname,
      manifest: require('./public/dll/vendor.manifest.json')
    }]);
  config.plugin('addAssetHtml')
    .use(AddAssetHtmlPlugin, [
      [
        {
          filepath: require.resolve(path.resolve(__dirname, 'public/dll/vendor.dll.js')),
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
    output: isDev? {
      filename: 'js/[name].[hash:6].js',
      chunkFilename: 'chunk/[name].[hash:6].js',
    }: {
      filename: 'js/[name].[contenthash:6].js',
      chunkFilename: 'chunk/[name].[contenthash:6].js',
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
  css: {
    extract: true,
    sourceMap: false,
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      },
    }
  }
};
