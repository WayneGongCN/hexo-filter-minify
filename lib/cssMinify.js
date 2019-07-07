const minify = require('uglifycss')

module.exports = options => str => minify.processString(str, options)
