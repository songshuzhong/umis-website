const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    dll_vendor: ['vue', 'vue-router', 'element-plus', 'axios'],
    qrcode2: ['qrcode2'],
    echarts: ['echarts'],
    js_export_excel: ['js-export-excel'],
    copy_to_clipboard: ['copy-to-clipboard']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './public/dll'),
    library: 'dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'dll_[name]',
      path: path.join(__dirname, 'public/manifest', '[name].manifest.json'),
      context: __dirname
    })
  ]
};
