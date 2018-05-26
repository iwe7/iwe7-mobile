const path = require('path')
const webpack = require('webpack')
const package = require('../package.json')
module.exports = {
  entry: {
    rxjs: Object.keys(package.rxjs).filter((item) => {
      return true
    })
  },
  output: {
    path: path.join(__dirname, 'libs'),
    filename: 'dll.[name].js',
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'libs', '[name].manifest.json'),
      name: '_dll_[name]'
    })
  ],
  mode: "production"
}
