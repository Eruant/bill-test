const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    bundle: './lib/client/index.js'
  },
  output: {
    path: path.join(__dirname, 'lib/static'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            'latest'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
