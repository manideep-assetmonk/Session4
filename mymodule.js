const fs = require('fs')
const path = require('path')
/**
 * to export from a given file so that other files are allowed to access the exported code.
 * 
 */
module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }
    /**
     * filter() creates a new array filled with elements that pass a test provided by a function
    
     */

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}