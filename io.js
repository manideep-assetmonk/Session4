const fs = require('fs');
var s=require ('fs');
/**
 * readFileSync()  Same as readFile(), but synchronous instead of asynchronous
 */
var k=s.readFileSync(process.argv[2]).toString().split('\n').length;
    console.log(k-1);
