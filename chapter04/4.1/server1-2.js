const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200,{ 'Content-Type' : 'text/html;charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8083,() =>{ // 서버 연결
    console.log('8083번 포트에서 서버 대기 중입니다.');
  });

http.createServer((req,res)=>{
  res.write(200,{'Content-type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8084,()=>{
    console.log('8084 포트에서 서버 대기 중입니다.');
  });