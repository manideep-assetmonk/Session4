var http = require('http');
var urlmodule = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function(req,res){
    if(req.method==='GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
       /**
        * Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        */ 
        var url = urlmodule.parse(req.url, true);
        if(url.pathname==='/api/parsetime') {
            var query = url.query.iso;
            var dt = new Date(query);
            var jsonObj = {};
            jsonObj.hour = dt.getHours();
            jsonObj.minute = dt.getMinutes();
            jsonObj.second = dt.getSeconds();
            /**
             * Converting a JavaScript object into a string with JSON.stringify().
             */
            res.write(JSON.stringify(jsonObj));
            res.end();
        }
        else if(url.pathname==='/api/unixtime') {
            var query = url.query.iso;
            var dt = new Date(query);
            var jsonObj = {};
            jsonObj.unixtime = dt.getTime();;
            res.write(JSON.stringify(jsonObj));
            res.end();
        }
    }
});
server.listen(port);