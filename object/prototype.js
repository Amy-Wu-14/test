/**
 * 构造函数可以是函数表达式
 * 也可以是函数声明，因此以下两种形式都可以
 * function Person() { }
 * let Person = function () { }
 */
function Person() {
    Person.prototype.name = 'Nicholas';
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";

    Person.prototype.sayName = function () {
        console.log(this.name);
    }
}
/**
 * 声明之后，构造函数就有一个与之关联的原型对象
 */
console.log(typeof Person.prototype)    //object
console.log(Person.prototype)  //{constructor:f Person(), _proto_:Object}
/**
 * 构造函数有一个prototype属性
 * 引用其原型对象，而这个原型对象也有一个constructor属性，引用这个构造函数
 * 两者循环引用
 */
console.log(Person.prototype.constructor === Person)    //true
/**
 * 正常的原型链都会终止于Object的原型对象
 * Object原型的原型是null
 */
// console.log(Person.prototype._proto_ === Object.prototype)  //true
// console.log(Person.prototype._proto_.constructor === Object)  //true
// console.log(Person.prototype._proto_._proto_ === null)  //true

console.log(Person.prototype._proto_)
// {
//     constructor:f Object(),
//     toString:...,
//     hasOwnProperty:...
//     isPrototypeOf:...
//     ...
// }

let person1 = new Person(),
    person2 = new Person();
/**
 * 构造函数、原型对象和实例时3个完全不同的对象
 */
console.log(person1 !== Person)  //true
console.log(person1 !== Person.prototype)  //true
console.log(Person.prototype !== Person)  //true
/**
 * 实例通过_proto_链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]]
 * 
 * 构造函数通过prototype属性连接到原型对象
 * 
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */
console.log(person1._proto_ === Person.prototype)  //true
// console.log(person1._proto_.constructor === Person)
/**
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象
 */
console.log(person1._proto_ === person2._proto_)  //true
/**
 * instanceof检查实例的原型链中是否包含指定构造函数的原型
 */
console.log(person1 instanceof Person)  //true
console.log(person1 instanceof Object)  //true
console.log(Person.prototype instanceof Object)  //true

/**
 * 判断两个对象是否指向同一个原型对象
 * isPrototypeOf：会在传入参数(person1)的[[Prototype]]指向调用它的对象(Person.prototype)时返回ture
 */

console.log(Person.prototype.isPrototypeOf(person1))
console.log(Person.prototype.isPrototypeOf(person2))
/**
 * 返回参数的内部特性[[Proptype]]]的值
 */
console.log(Object.getPrototypeOf(person1) == Person.prototype)
console.log(Object.getPrototypeOf(person1).name)
/**
 * setProtoyypeOf()向实例的私有特性[[Prototype]]写入一个新值
 * 重写一个对象的原型继承关系
 */
let biped = {
    numLegs: 2
};
let person = {
    name: 'Matt'
}
Object.setPrototypeOf(person, biped)
console.log(person.name)    //Matt
console.log(person.numLegs) //2
console.log(Object.getPrototypeOf(person) === biped)    //true
/**
 * create()
 */
person = Object.create(biped)
person.name = 'Matt'
console.log(person.name)    //Matt
console.log(person.numLegs) //2
console.log(Object.getPrototypeOf(person) === biped)    //true

/**
 * create 和 setPrototypeOf的区别？
 * 如果Animal是一个新对象，可以使用create
   如果Animal已有了自己的原型对象，再使用create时，会丢失该原型对象的属性和方法
   所以需要使用setPrototypeOf,这时的原型对象包含{
       construct——>构造函数Animal
       Animal的原始原型对象的属性和方法即shout
       __proto__:{
           constructor——>构造函数Plants
           f shout
           f genO2
       }
   }
 **/
function Animal(name, sound) {
    this.name = name
    this.sound = sound
}
Animal.prototype.shout = function () {
    console.log(this.name + this.sound)
}
function Plants(name) {
    this.name = name
    this.sound = null
}
Plants.prototype.shout = function (xssss) {
    console.log(this.name + this.sound + 'plants tag')
}
Plants.prototype.genO2 = function () {
    console.log(this.name + '生成氧气。')
}
let dog = new Animal('pipi', 'wang!wang!')

//----------------------------------------------------------使用create
// Animal.prototype = Object.create(Plants.prototype) 
//     console.log(Animal.prototype)
// /*
//     Plants {}
//         __proto__:
//             shout: ƒ (xssss)
//             genO2: ƒ ()
//             constructor: ƒ Plants()
//             __proto__: Object
// */


// let cat = new Animal('mimi', 'miao~miao~')
// dog.shout() // pipi wang!wang!
// cat.shout() // mimi miao~miao~ plants tag
// cat.genO2() // mimi 生成氧气。

//--------------------------------------------------------------使用setPrototypeOf
Object.setPrototypeOf(Animal.prototype, Plants.prototype)
console.log(Animal.prototype)
/*
    Plants {shout: ƒ, constructor: ƒ}
        shout: ƒ (xssss)
        constructor: ƒ Animal(name,sound)
        __proto__:
        shout: ƒ ()
        genO2: ƒ ()
        constructor: ƒ Plants()
        __proto__: Object
    */
let cats = new Animal('mimi', 'miao~miao~')
dog.shout() // pipi wang!wang!
cats.shout('sdf') // mimi miao~miao~
cats.genO2() // mimi 生成氧气。
Animal.prototype.__proto__.shout()
