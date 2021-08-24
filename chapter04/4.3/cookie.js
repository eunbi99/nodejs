const http =require('http');

http.createServer((res,req)=>{
  console.log(req.url,req.headersSent.cookie);
  res.writeHead(200,{'Set-Cookie': 'mycookie=test'});
  res.end('Hello Cookie');
})
  .listen(8083,()=>{
    console.log('8083번 포트에서 서버 대기중입니다.');
  });