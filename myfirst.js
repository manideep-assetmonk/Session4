var k=require('fs')
var ra;
/** 
The readFile() method is used to read files on your computer.
*/
var ab=k.readFile(process.argv[2],'utf8' ,(rejection,resolve)=>{
 
 
 if(rejection) {
     return error } 
     var l=resolve.toString().split('\n').length-1
     console.log(l)
})
