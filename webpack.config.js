const webpack = require("webpack");
const path = require("path");

const PORT = 3030;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: `http://localhost:${PORT}/dist/`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: false,
    host: "0.0.0.0",
    port: PORT,
    historyApiFallback: true,
    contentBase: "./src"
  }
};
