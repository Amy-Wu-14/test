class Person {
    constructor(override) {
        this.foo = 'foo';
        if (override) {
            return { bar: 'bar' }
        }
        //默认返回this
    }
}
new Person()  //无引用，返回的this会被销毁
let p1 = new Person(), p2 = new Person(true);
console.log(p1)
console.log(p1 instanceof Person)
console.log(p2)
console.log(p2 instanceof Person)	//返回的对象不是this

// Person { foo: 'foo' }
// true
// { bar: 'bar' }
// false

/**
 * Person 是一个函数
 */
class Person { }
console.log(Person)  // [class Person]
console.log(typeof Person)  // function



console.log(Person.prototype) // [constructor: {}]
console.log(Person === Person.prototype.constructor)    // true


/**
 *  instanceof 检查一个对象与类构造函数，此时的类构造函数要使用类标识符
 */

let p = new Person()
console.log(p instanceof Person)    //true

/**
 * 类本身在使用new调用时就会被当作构造函数
 * 但是，如果在创建实例时直接将类构造函数当成普通构造函数来使用，那么instanceof操作符的返回值会反转
 */
class Person { }
let p1 = new Person()
console.log(p1.constructor === Person)
console.log(p1 instanceof Person)
console.log(p1 instanceof Person.constructor)
let p2 = new Person.constructor()
console.log(p2.constructor === Person)
console.log(p2 instanceof Person)
console.log(p2 instanceof Person.constructor)
// true
// true
// false
// false
// false
// true

class Person {
    // 存在不同的实例上
    constructor() {
        this.locate = () => { console.log('instance') }
    }
    // 类块内的内容，都存在类的原型上
    locate() {
        console.log('prototype')

    }
    // 设置访问器
    set name(newName) {
        this.name_ = newName
    }
    get name() {
        return this.name_
    }
}
let p = new Person()
p.locate()  //instance
Person.prototype.locate()   //prototype
console.log(Object.getPrototypeOf(Person))