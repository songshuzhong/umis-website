const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: isDev ? '' : '/umis-website/dist',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true,
      },
      '/ajax': {
        target: 'http://kadm.test.weibo.com',
        changeOrigin: true,
      },
    },
  },
};
