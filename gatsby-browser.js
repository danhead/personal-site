const React = require("react")
const Layout = require("./src/components/layout").default
require("typeface-lato")
require("prismjs/themes/prism-coy.css")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
