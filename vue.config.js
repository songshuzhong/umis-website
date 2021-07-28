module.exports = {
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
