var a=process.argv.length;
var sum=0;
for(let i=2;i<a;i++)
{
    /**
     * Number() can be used to convert JavaScript variables to numbers
     */
    sum=sum+Number(process.argv[i]);
}
console.log(sum);
/**
 * The log() method writes (logs) a message to the console.
 */