const {
  override,
  fixBabelImports,
  addWebpackModuleRule
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addWebpackModuleRule({
    test: /\.gql$/,
    exclude: /node_modules/,
    loader: "graphql-tag/loader"
  })
);
