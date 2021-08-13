const fs = require('fs');

fs.watch('./chapter03/day04/target.txt',(eventType, filename)=>{
  console.log(eventType,filename);
})