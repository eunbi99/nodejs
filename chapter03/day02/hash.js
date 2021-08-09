const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

//createHash(알고리즘) : 사용할 해시 알고리즘을 넣는다. 현재는 sha512로 충분하다.
//update(문자열) : 변환할 문자열 넣는다.
//digest(인코딩) : 인코딩할 알고리즘을 넣는다. base64가 결과 문자열이 가장 짧아 애용. 결과물로 변환된 문자열 반환