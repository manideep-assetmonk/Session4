var http = require('http')
    var a = require('through2-map')
     var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(a(function (chunk) {
        return chunk.toString().toUpperCase()
         /**
     * pipe() Turns the readable stream into the specified writable stream
     */
    
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))