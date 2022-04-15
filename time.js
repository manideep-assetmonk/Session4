var net = require('net');
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date();
      /**  
       * creating custom format from a new date() to create a date.
        */
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
      /**
       * socket.write(data) to write data to the socket and socket.end() to close the socket.
       */
    })
    
    server.listen(Number(process.argv[2]));