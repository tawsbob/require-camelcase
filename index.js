const fs = require('fs')
const path = require('path')

/**
 * generates object with all files in folder
 * @function
 * @param {string} dir - path of files default is __dirname
 */

const exportFiles = dir => {
  const dirname = dir || __dirname
  const files = fs.readdirSync(dirname)

  return files.reduce((acc, file) => {
    if (file === 'index' || file === 'index.js') return acc
    const name = file.replace('.js', '').split('-')
    if (name.length > 1) {
      const secondNameFirstChar = name[1][0].toUpperCase()
      const nameKey = `${name[0]}${secondNameFirstChar}${name[1].substring(1)}`
      acc[nameKey] = require(path.resolve(dirname, file))
    } else {
      acc[name[0]] = require(path.resolve(dirname, file))
    }
    return acc
  }, {})
}

module.exports = exportFiles
