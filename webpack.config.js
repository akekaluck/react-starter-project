const path = require('path');
const webpack = require('webpack');
const darkTheme = require('@ant-design/dark-theme').default;
let newDarkTheme = {};
for(let prop in darkTheme) {
  newDarkTheme[prop.replace('@','')] = darkTheme[prop];
}

console.log(darkTheme);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env",'@babel/preset-react'],
          "plugins": [
            "babel-plugin-transform-class-properties"
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              modifyVars: newDarkTheme,
              javascriptEnabled: true,
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
