const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: isDev ? './' : '/i-website/dist',
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
        '@element-plus/icons-vue': path.resolve(process.cwd(), 'node_modules', '@element-plus/icons-vue'),
        '@vueuse': path.resolve(process.cwd(), 'node_modules', '@vueuse')
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
    ],
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
