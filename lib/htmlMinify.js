const minify = require('html-minifier').minify

module.exports = options => str => minify(str, options)
