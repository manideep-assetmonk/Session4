
var fs = require('fs')
/**
 * To include a module, use the require() function with the name of the module
 */
var p = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]
/**
 *  readdir() Reads the content of a directory
 */

fs.readdir(folder, function (err, files) {
  if (err) return error
  files.forEach(function(file) {
      if (p.extname(file) === ext) {
          console.log(file)
      }
  })
})