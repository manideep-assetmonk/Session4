/**
 * To include a module, use the require() function with the name of the module
 */
var k=require('http');
let url=process.argv[2];
/**
 * .get() method loads data from the server using a HTTP GET request.
 */
k.get(url,function(response){
    response.setEncoding('utf-8');
    response.on('data',function(data){
        console.log(data);
    
    });
    response.on('error',console.error);
});