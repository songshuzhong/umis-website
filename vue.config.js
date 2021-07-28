const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: isDev ? '' : '/umis-website/dist',
  devServer: {
    port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true,
      },
    },
  },
};
