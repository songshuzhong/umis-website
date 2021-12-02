const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const isDev = process.env.NODE_ENV === 'dev';

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
    },
    plugins: [
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
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      },
    }
  }
};
