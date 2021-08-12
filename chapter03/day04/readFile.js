const fs =require('fs');

fs.readFile('./chapter03/day04/readme.txt',(err,data)=> {
  if(err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});