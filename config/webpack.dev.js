const path = require("path")

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: ""
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [
      // { // TODO
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "images/SVG/[name].[ext]"
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "use:xlink:href"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
              // [name]-[hash:8].[ext]
            }
          }
        ]
      }
    ]
  }
}