const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: isDev ? './' : '/umis-website/dist',
  configureWebpack: {
    output: isDev? {
      filename: '[name].[hash:6].js',
      chunkFilename: '[name].[hash:6].js',
    }: {
      filename: '[name].[contenthash:6].js',
      chunkFilename: '[name].[contenthash:6].js',
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
  chainWebpack: config => {
    config.plugin('vendorDll1')
      .use(webpack.DllReferencePlugin, [
        {
          context: __dirname,
          manifest: require('./public/manifest/vendor.manifest.json')
        }
      ]);
    config.plugin('vendorDll2')
      .use(webpack.DllReferencePlugin, [
        {
          context: __dirname,
          manifest: require('./public/manifest/copy_to_clipboard.manifest.json')
        }
      ]);
    config.plugin('vendorDll3')
      .use(webpack.DllReferencePlugin, [
        {
          context: __dirname,
          manifest: require('./public/manifest/echarts.manifest.json')
        }
      ]);
    config.plugin('vendorDll4')
      .use(webpack.DllReferencePlugin, [
        {
          context: __dirname,
          manifest: require('./public/manifest/qrcode2.manifest.json')
        }
      ]);
    config.plugin('vendorDll5')
      .use(webpack.DllReferencePlugin, [
        {
          context: __dirname,
          manifest: require('./public/manifest/js_export_excel.manifest.json')
        }
      ]);
    config.plugin('asset')
      .use(AddAssetHtmlPlugin, [
        [
          {
            filepath: path.resolve(__dirname, 'public/dll/vendor.dll.js'),
            outputPath: 'dll',
            publicPath: isDev ? './' : '/umis-website/dist/dll'
          },
          {
            filepath: path.resolve(__dirname, 'public/dll/copy_to_clipboard.dll.js'),
            outputPath: 'dll',
            publicPath: isDev ? './' : '/umis-website/dist/dll'
          },
          {
            filepath: path.resolve(__dirname, 'public/dll/echarts.dll.js'),
            outputPath: 'dll',
            publicPath: isDev ? './' : '/umis-website/dist/dll'
          },
          {
            filepath: path.resolve(__dirname, 'public/dll/qrcode2.dll.js'),
            outputPath: 'dll',
            publicPath: isDev ? './' : '/umis-website/dist/dll'
          },
          {
            filepath: path.resolve(__dirname, 'public/dll/js_export_excel.dll.js'),
            outputPath: 'dll',
            publicPath: isDev ? './' : '/umis-website/dist/dll'
          }
        ]
      ]);
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
