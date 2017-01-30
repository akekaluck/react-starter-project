var path = require('path');

module.exports = {
  entry: './app/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './dist/'
  },
  devServer: {
    inline: true,
    contentBase: "app",
    // hot: true
  }
};
