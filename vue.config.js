module.exports = {
  publicPath:
    process.env.NODE_ENV === 'development' ? '' : '/umis-website/dist',
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
