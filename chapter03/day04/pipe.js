const fs = require('fs');

const readStream = fs.createReadStream('./chapter03/day04/readme4.txt');
const writeStream = fs.createWriteStream('./chapter03/day04/write3.txt');
readStream.pipe(writeStream);