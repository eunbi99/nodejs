//require 함수로 var.js에 있던 값을 불러온다.
const { odd,even } = require('./var');

function checkOddOrEven(num){
  if(num % 2){ // 홀수면
    return odd;
  }

  return even;
}

module.exports = checkOddOrEven;