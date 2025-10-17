const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { split } = require("lodash");

module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, "modules/header/header.js"),
    body: path.resolve(__dirname, "modules/body/body.js"),
    footer: path.resolve(__dirname, "modules/footer/footer.js"),
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Task 3",
    }),
  ],
  performance: {
    maxAssetSize: 512000, // 500 KiB
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8564,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
