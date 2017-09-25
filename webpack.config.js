const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: ['./index.js', './dhaka.scss'],
  output: {
    path: __dirname,
    filename: 'budle.js'

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })

      }
    ]

  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]

}
