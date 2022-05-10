/**
 * 实例工厂
 */
class Person {
    constructor(age) {
        this.age_ = age
    }
    sayAge() {
        console.log(this.age_)
    }
    static create() {
        return new Person(Math.floor(Math.random() * 100))
    }
}
console.log(Person.create())    //Person { age_: ... }

class Person {
    sayName() {
        console.log(`${Person.greeting} ${this.name}`)
    }
}
// 在类上定义数据成员
Person.greeting = 'My name is'
// 在原型上定义数据成员
Person.prototype.name = 'Jake'
let p = new Person()
p.sayName()