const fs = require('fs').promises;

fs.copyFile('./chapter03/day04/readme4.txt','./chapter03/day04/writeme4.txt')
.then(()=>{
  console.log('복사 완료');
})
.catch((error)=>{
  console.error(error);
});