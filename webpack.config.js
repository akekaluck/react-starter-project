var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./public/build"),
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
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  plugins: [
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('./css/styles.css')
  ]
}
