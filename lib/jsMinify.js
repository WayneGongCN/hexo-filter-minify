const minify = require('uglify-es').minify

module.exports = options => str => {
  const result = minify(str, options)
  if (result.error) throw new Error(result.error)
  return result.code
}
