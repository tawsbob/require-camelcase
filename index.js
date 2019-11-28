const fs = require('fs')
const path = require('path')
const camelCase = require('camelcase')

/**
 * generates object with all files in folder
 * @function
 * @param {string} dir - path of files default is __dirname
 */

const isJsFile = /[a-zA-Z0-9-].+(\.json|\.js)/g
const jsonOrJsExt = /(\.json|\.js)/g

const exportFiles = dir => {
  const dirname = dir || __dirname
  const files = fs.readdirSync(dirname)

  return files.reduce((acc, file) => {
    if (file === 'index' || file === 'index.js' || !isJsFile.test(file)) return acc
    
    const name  = camelCase(file.replace(jsonOrJsExt, ''))
    acc[name]   = require(path.resolve(dirname, file))

    return acc
  }, {})
}

module.exports = exportFiles
