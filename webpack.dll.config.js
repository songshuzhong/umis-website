const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['vue', 'vue-router', 'element-plus', 'axios', 'js-export-excel', 'copy-to-clipboard', 'qrcode2', 'echarts']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist/dll'),
    library: 'dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'dll_[name]',
      path: path.join(__dirname, 'dist/dll', '[name].manifest.json'),
      context: __dirname
    })
  ]
};
