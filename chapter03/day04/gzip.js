const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./chapter03/day04/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./chapter03/day04/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);