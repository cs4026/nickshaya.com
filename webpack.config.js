const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./public/index.html"),
    filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
         test: /\.css$/,
         use: [
           'style-loader',
          'css-loader'
         ]
       },{
         test: /\.(pdf|jpg|png|gif|svg|ico)$/,
         use:[
           'url-loader'
         ],
         include: '/media/'
       }
    ]
  },
  devServer: {
    port: 3001,
    publicPath: "/",
    contentBase: "./public",
    hot: true
}
};
