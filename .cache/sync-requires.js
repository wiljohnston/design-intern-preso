const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-page-js": hot(preferDefault(require("/Users/williamjohnsto/Documents/LAM/design-intern-preso/src/templates/index-page.js")))
}

