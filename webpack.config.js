const webpack = require("webpack");
const path = require("path");

const PORT = 3030;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["@babel/polyfill", path.join(__dirname, "/src/index.js")],
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
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[local]__[hash:base64:5]"
            }
          },
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              // Or array of paths
              resources: "./src/styles/*.scss"
            }
          }
        ]
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
  plugins: [
    new webpack.EnvironmentPlugin({
      YOUTUBE_URL: "https://www.googleapis.com/youtube/v3/",
      YOUTUBE_TOKEN: "AIzaSyDdk3vRtPVGmnKjtIt_kLLzihCCTfXdkUk"
    })
  ],
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
