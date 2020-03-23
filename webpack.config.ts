import path from "path";
import autoprefixer from "autoprefixer";
import ExtractCSS from "extract-text-webpack-plugin";

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "ts", "main.ts");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts)$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")],
  resolve: {
    extensions: [".ts", ".js"]
  }
};

export default config;
