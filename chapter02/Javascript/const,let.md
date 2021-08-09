# 💻const , let

```
if(true){
  var x =3;
}
console.log(x); // 3

if(true){
  const y =3;
}

console.log(y); // Uncaught ReferenceError: y is not defined
````
보통 자바스크립트를 배울 때 `var`로 변수를 선언하는 방법부터 배우지만
var는 이제 `const`와 `let`이 대체한다.

- #### `var` 는 함수 스코프를 가지고 if문의 블록과 관계없이 접근 가능 
- #### `const` 와 `let` 은 블록 스코프를 가지므로 블록 밖에서는 접근 불가능

## 🤔 const 와 let의 차이?
```
const a=0;
a = 1; // Uncaught TypeError : Assignment to constant variable.

let b=0;
b = 1; // 1
```
#### `const`
> - #### const는 한 번 값을 할당하면 다른 값을 할당할 수 없다. 
> - #### const로 선언한 변수를 상수 라고 부르기도한다.

#### `let`
>- #### let는 변수 값을 재할당 가능하다. 

<br>
 변수 선언시 기본적으로 const 사용하고, 다른 값을 할당해야 하는 상황이 생겼을 때 let 사용
