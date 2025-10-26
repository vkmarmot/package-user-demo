import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // Точка входа
  entry: "./src/index.js",

  mode: "development",

  devServer: {
    static: {
      directory: join(__dirname, "public"),
    },
    port: 9000,
  },
  // Выходной файл
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
