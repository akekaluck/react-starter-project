var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = {
  entry: './app/js/app.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
      // For production extract to seperate file
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     //resolve-url-loader may be chained before sass-loader if necessary
      //     use: ['css-loader', 'less-loader']
      //   })
      // }
    ]
  },
  plugins: [
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('./css/styles.css')
  ]
}
