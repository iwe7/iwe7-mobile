const path = require('path')
const webpack = require('webpack')
const package = require('../package.json')
module.exports = {
  entry: {
    angular: Object.keys(package.angular).filter((item) => {
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
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./libs/rxjs.manifest.json")
    })
  ],
  mode: "production"
}
