module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Site Title","short_name":"site-title","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"/Users/williamjohnsto/Documents/LAM/design-intern-preso/src/assets/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"408f9a687171af1e975e3d9ebc292caa"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":968,"sizeByPixelDensity":true,"withWebp":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
