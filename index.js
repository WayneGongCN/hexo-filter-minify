const htmlMinify = require('./lib/htmlMinify')
const cssMinify = require('./lib/cssMinify')
const jsMinify = require('./lib/jsMinify')
const config = hexo.config.minify || {}

const htmlMinifyOptions = {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    collapseWhitespace: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeTagWhitespace: true,
    minifyCss: true,
    minifyJs: true,
    ...config.html
}

const cssMinifyOptions = {
    uglyComments: true,
    expandVars: true,
    ...config.css
}

const jsMinifyOptions = {
    ecma: 6,
    ...config.js
}

hexo.extend.filter.register('after_render:html', htmlMinify(htmlMinifyOptions))
hexo.extend.filter.register('after_render:css', cssMinify(cssMinifyOptions))
hexo.extend.filter.register('after_render:js', jsMinify(jsMinifyOptions))
