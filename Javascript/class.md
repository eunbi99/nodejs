# π» ν΄λμ€ 
- λ€λ₯Έ μΈμ΄μ²λΌ ν΄λμ€ κΈ°λ°μΌλ‘ λμνλ κ²μ΄ μλλΌ νλ‘ν νμ κΈ°λ°μΌλ‘ λμνλ€.

### ν΄λμ€ μ μΈ

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
