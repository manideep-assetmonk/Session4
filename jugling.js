/**
 * To include a module, use the require() function with the name of the module
 */
var http = require('http');
var bl = require('bl');
var urlLength = process.argv.length;

var nextUrl = function(urlLength,i){
    if(urlLength>i){
        var url = process.argv[i];
        var msg = '';
        http.get(url,function(response){
            response.setEncoding('utf8');

            response.pipe(bl(function(err,data){
                    if (err)
                    return console.error(err);
                    
                    msg=data.toString();
                })
            );

            response.on('end',function(){
                console.log(msg);
                nextUrl(urlLength,i+1);
            });

            response.on('error', console.error);

        });
    }
};

nextUrl(urlLength,2);