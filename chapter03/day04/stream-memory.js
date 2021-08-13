const fs =require('fs');

console.log('before :',process.memoryUsage().rss);

const readStream = fs.createReadStream('./chapter03/day04/big.txt');
const writeStream = fs.createWriteStream('./chapter03/day04/big3.txt');
readStream.pipe(writeStream);
readStream.on('end',()=>{
  console.log('stream:',process.memoryUsage().rss);
});