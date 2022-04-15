var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

/**
 *   http.createserver() creates a server that can talk HTTP.
 * */
var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    
    var stream = fs.createReadStream(file);
    /**
     * pipe() Turns the readable stream into the specified writable stream
     */
    stream.pipe(res);
});
server.listen(port);