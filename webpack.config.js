const path = require('path')

module.exports = {
  entry: './src/modules/index.jsx',

  watch: true,

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules/')
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:10]'
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}
