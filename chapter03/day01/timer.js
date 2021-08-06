/* 타이머 */

//setTimeout(콜백 함수, 밀리초) : 주어진 밀리초 이후에 콜백 함수 실행
const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
},1500);

//setInterval(콜백 함수, 밀리초): 주어진 밀리초마다 콜백 함수 반복 실행
const interval = setInterval(()=> {
  console.log('1초 마다 실행')
},1000);

const timeout2 = setTimeout(()=>{
  console.log('실행되지 않습니다.');
},3000);

//clearTimeout(아이디) : setTimeout 취소
setTimeout(()=>{
  clearTimeout(timeout2);
  clearTimeout(interval);
},2500);

//setImmdiate(콜백함수) : 콜백 함수 즉시 실행
const immediate = setImmediate(()=>{
  console.log('즉시 실행');
});

const immdiate2 = setImmediate(()=> {
  console.log('실행되지 않았습니다.');
});

clearImmediate(immdiate2);