# 💻 클래스 
- 다른 언어처럼 클래스 기반으로 동작하는 것이 아니라 프로토타입 기반으로 동작한다.

### 클래스 선언

```
class Person{
  constructor(name,age){
    //Field
    this.name=name;
    this.age=age;
  }

  //Method
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

const eunbi = new Person('eunbi',23);
console.log(eunbi.name);  //eunbi
console.log(eunbi.age);  //23
eunbi.speak(); // eunbi: hello!
```

### Getter and setter
```
class User{
  constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }

  get age(){
    return this._age;
  }

  set age(value){
    this._age=value < 0 ? 0 :value;
  }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);
```
