const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: isDev ? './' : '/umis-website/dist',
  productionSourceMap: false,
  transpileDependencies: ['element-plus'],
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
    },
    plugins: [
      new GenerateSW ({
        clientsClaim: true,
        skipWaiting: true
      }),
      new MonacoWebpackPlugin({
        filename: 'worker/[name].worker.js',
        languages: ['json'],
      }),
    ],
  },
  css: {
    extract: true,
    sourceMap: false,
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/fansSupportOrder': {
        target: 'http://terra.bpdev.biz.weibo.com',
        changeOrigin: true
      },
      '/api/templates': {
        target: 'http://ashina.biz.weibo.com',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      }
    }
  }
};
