const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ['element-plus'],
  productionSourceMap: false,
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
        '@vueuse/core': path.resolve(process.cwd(), 'node_modules', '@vueuse/core'),
        '@vueuse/shared': path.resolve(process.cwd(), 'node_modules', '@vueuse/shared'),
        '@element-plus/icons-vue': path.resolve(process.cwd(), 'node_modules', '@element-plus/icons-vue'),
        'element-plus': path.resolve(process.cwd(), 'node_modules', 'element-plus'),
        lodash: path.resolve(process.cwd(), 'node_modules', 'lodash')
      }
    },
    plugins: [
      new MonacoWebpackPlugin({
        filename: 'worker/[name].worker.js',
        languages: ['json'],
      }),
      new GenerateSW ({
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      }
    }
  }
};
