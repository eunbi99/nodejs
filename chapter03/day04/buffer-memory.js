const fs = require('fs');

console.log('before : ',process.memoryUsage().rss);

const data1 = fs.readFileSync('./chapter03/day04/big.txt');
fs.writeFileSync('./chapter03/day04/big2.txt',data1);
console.log('buffer:',process.memoryUsage().rss);