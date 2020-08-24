// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-page-js": () => import("./../src/templates/index-page.js" /* webpackChunkName: "component---src-templates-index-page-js" */)
}

