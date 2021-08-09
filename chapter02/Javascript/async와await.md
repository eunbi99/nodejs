# 💻 async / await
- 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법
- 프로미스가 콜백 지옥을 해결했지만, then과 catch가 계속 반복되기 때문에 여전히 코드는 장황하다.
- 기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완

## ✨ async
```
async function fetchUser(){
  return new Promise((resolve,reject) =>{
    //do network request in 10 secs....
    return 'eunbi'
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

```
- `async`는 function 앞에 위치하며 해당 함수는 항상 프로미스를 반환한다.

## ✨ await 
```
function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000); //1초가 지나면 사과 리턴
  return '🍎';
}

async function getBanana(){
  await delay(1000); //1초가 지나면 바나나 리턴
  return '🍌';
}

```
- `await` 키워드를 만나면 프로미스가 처리될 때까지 기다린다.

```
function pickFruits(){
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`)
  })
}
```
> #### 프로미스도 너무 중첩적으로 사용되면 콜백지옥과 비슷한 문제점이 발생한다.
> #### 아래 코드처럼 `async`를 사용하여 간단하게 만들 수 있다.
```
async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;

}

pickFruits().then(console.log);
```
- applePromise와 bananaPromise를 만들어서 실행하면 병렬적으로 실행된다.(동시에 출력 가능)
- API를 사용하면 더 깔끔하게 코드 작성 가능하다

## `join` 
```
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);
```

## `race` 
#### banana가 delay가 1초고, apple이 3초일 경우 먼저 호출되는 🍌가 출력된다!
```
function pickOnlyOne(){
  return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);
```
