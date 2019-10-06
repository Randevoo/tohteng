const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackModuleRule,
  addWebpackAlias
} = require("customize-cra");

const getModulePath = module => path.resolve(__dirname, "src", module);

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
