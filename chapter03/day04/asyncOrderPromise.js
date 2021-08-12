const fs =require('fs').promises;

console.log('시작');
fs.readFile('./chapter03/day04/readme2.txt')
  .then((data)=>{
    console.log('1번',data.toString());
    return fs.readFile('./chapter03/day04/readme2.txt');
  })
  .then((data)=>{
    console.log('2번',data.toString());
    return fs.readFile('./chapter03/day04/readme2.txt');
  })
  .then((data)=>{
    console.log('3번',data.toString());
    console.log('끝');
  })
  .catch((err)=>{
    console.err(err);
  });