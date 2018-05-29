const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: ['core-js/es6/symbol', 'core-js/es6/object', 'core-js/es6/function', 'core-js/es6/parse-int', 'core-js/es6/parse-float', 'core-js/es6/number', 'core-js/es6/math', 'core-js/es6/string', 'core-js/es6/date', 'core-js/es6/array', 'core-js/es6/regexp', 'core-js/es6/map', 'core-js/es6/weak-map', 'core-js/es6/set', 'classlist.js', 'core-js/es6/reflect', 'core-js/es7/reflect', 'zone.js/dist/zone', '@webcomponents/custom-elements/src/native-shim', '@webcomponents/custom-elements/custom-elements.min'],
    swiper: ['swiper'],
    jquery: ['jquery'],
    moment: ['moment'],
    hammerjs: ['hammerjs'],
    lodash: ['lodash']
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'libs'),
    library: '_dll_[name]',
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '_dll_[name]',
      path: path.join(__dirname, 'libs/', "[name].manifest.json"),
    })
  ],
  mode: "production"
};
