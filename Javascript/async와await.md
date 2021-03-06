# ๐ป async / await
- ์๋ฐ์คํฌ๋ฆฝํธ์ ๋น๋๊ธฐ ์ฒ๋ฆฌ ํจํด ์ค ๊ฐ์ฅ ์ต๊ทผ์ ๋์จ ๋ฌธ๋ฒ
- ํ๋ก๋ฏธ์ค๊ฐ ์ฝ๋ฐฑ ์ง์ฅ์ ํด๊ฒฐํ์ง๋ง, then๊ณผ catch๊ฐ ๊ณ์ ๋ฐ๋ณต๋๊ธฐ ๋๋ฌธ์ ์ฌ์ ํ ์ฝ๋๋ ์ฅํฉํ๋ค.
- ๊ธฐ์กด์ ๋น๋๊ธฐ ์ฒ๋ฆฌ ๋ฐฉ์์ธ ์ฝ๋ฐฑ ํจ์์ ํ๋ก๋ฏธ์ค์ ๋จ์ ์ ๋ณด์

## โจ async
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
- `async`๋ function ์์ ์์นํ๋ฉฐ ํด๋น ํจ์๋ ํญ์ ํ๋ก๋ฏธ์ค๋ฅผ ๋ฐํํ๋ค.

## โจ await 
```
function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000); //1์ด๊ฐ ์ง๋๋ฉด ์ฌ๊ณผ ๋ฆฌํด
  return '๐';
}

async function getBanana(){
  await delay(1000); //1์ด๊ฐ ์ง๋๋ฉด ๋ฐ๋๋ ๋ฆฌํด
  return '๐';
}

```
- `await` ํค์๋๋ฅผ ๋ง๋๋ฉด ํ๋ก๋ฏธ์ค๊ฐ ์ฒ๋ฆฌ๋  ๋๊น์ง ๊ธฐ๋ค๋ฆฐ๋ค.

```
function pickFruits(){
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`)
  })
}
```
> #### ํ๋ก๋ฏธ์ค๋ ๋๋ฌด ์ค์ฒฉ์ ์ผ๋ก ์ฌ์ฉ๋๋ฉด ์ฝ๋ฐฑ์ง์ฅ๊ณผ ๋น์ทํ ๋ฌธ์ ์ ์ด ๋ฐ์ํ๋ค.
> #### ์๋ ์ฝ๋์ฒ๋ผ `async`๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ๋จํ๊ฒ ๋ง๋ค ์ ์๋ค.
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
- applePromise์ bananaPromise๋ฅผ ๋ง๋ค์ด์ ์คํํ๋ฉด ๋ณ๋ ฌ์ ์ผ๋ก ์คํ๋๋ค.(๋์์ ์ถ๋ ฅ ๊ฐ๋ฅ)
- API๋ฅผ ์ฌ์ฉํ๋ฉด ๋ ๊น๋ํ๊ฒ ์ฝ๋ ์์ฑ ๊ฐ๋ฅํ๋ค

## `join` 
```
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);
```

## `race` 
#### banana๊ฐ delay๊ฐ 1์ด๊ณ , apple์ด 3์ด์ผ ๊ฒฝ์ฐ ๋จผ์  ํธ์ถ๋๋ ๐๊ฐ ์ถ๋ ฅ๋๋ค!
```
function pickOnlyOne(){
  return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);
```
