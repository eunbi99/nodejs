# JSON (JavaScript Object Notation)
JSON이란 "키 -값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를
사용하는 개방형 표준 포맷이다.
#### `Object{key:value}`
```
const rabbit = {
  name:'tori',
  color:'white',
  size : null,
  birthDate:new Date(),
  jump: ()=>{
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); 

// {"name":"tori","color":"white","size":null,"birthDate":"2021-08-07T08:38:42.975Z"}

```
- 함수는 JSON에 포함되지 않는다.

```
json = JSON.stringify(rabbit,['name']);
console.log(json);  //{"name":"tori"}
```
- 이름만 JSON으로 변환하고 싶다면 배열에 프로퍼티 이름을 정의하면 된다.

```
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
//{name: "tori", color: "white", size: null, birthDate: "2021-08-07T08:44:08.427Z"}
```
