var http = require('http');
var bl = require('bl');


http.get(process.argv[2], function (response) {
 /**
     * pipe() Turns the readable stream into the specified writable stream
     */ 
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
