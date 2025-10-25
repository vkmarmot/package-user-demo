const path = require("path");

module.exports = {
  // Точка входа
  entry: "./src/index.js",

  mode: "development",

  // Выходной файл
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
