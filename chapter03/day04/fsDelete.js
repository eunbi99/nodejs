const fs = require('fs').promises;

fs.readdir('./chapter03/day04/folder')
.then((dir)=>{
  console.log('폴더 내용 확인',dir);
  return fs.unlink('./chapter03/day04/folder/newFile.js');
})
.then(()=>{
  console.log('파일 삭제 성공');
  return fs.rmdir('./chapter03/day04/folder');
})
.then(()=>{
  console.log('폴더 삭제 성공');
})
.catch((err) =>{
  console.log(err);
});