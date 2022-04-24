/**
 * let 与 var的区别
 * 
 * 1.不存在变量提升
 * 2.存在暂时性死区，预编译时不能被访问
 * 3.不允许重复声明，同意作用域内只能生命一次
 * 4.块级作用域，作用于之外不能访问里面声明的变量
 */
//不存在变量提升
console.log(a)  //undefined
var a = 10;
console.log(a)  //10

//console.log(b)  //报错
let b = 10
console.log(b)  //10

//不允许重复声明，同意作用域内只能生命一次
var t = 15
var t = 11
console.log(t)

let s = 10
// let s = 20   //报错
console.log(s)

//块级作用域，作用于之外不能访问里面声明的变量
if (true) {
    var a = 10
    let b = 5
}
console.log(a) //10
console.log(b)  //undefined


/**
 * 字符串方法
 */

// includes():判断字符串中，是否包含某个字符串
let str = 'a记得你飞连忙放屁v免费派发我'
console.log(str.includes('记得')) //true
console.log(str.includes('ab'))  //false

// startsWith():字符串是否以某个字符开头
console.log(str.startsWith('a'))    //true
console.log(str.startsWith('112'))  //false

// endsWith():字符串是否以某个字符结束
console.log(str.endsWith('我')) //true
console.log(str.endsWith('a'))  //false

// for of遍历  注意：for of 不能遍历对象
let arr = ['aa', 'bb', 'cc']
for (const a of arr) {
    console.log(a)
}

// for (const a of { a: 1 }) {
//     console.log(a) //{(intermediate value)} is not iterable
// }

//字符串拼接模板` `

//箭头函数：不需要function;省略return；this没有明确指向，会向上一级（宿主对象）寻找
() => { }

// 解构赋值：将值从数组或属性从对象提取到不同的变量中

// Symbol类型
let aa = Symbol(1)
let bb = Symbol(1)
console.log(aa == bb)
// symbol值不能进行隐式转换，因此它与其它类型的值进行运算会报错
// aa + 1
// symbol值可显示地转化成字符串
console.log(aa.toString())
// 可以转化成Boolen,但不能转成数值
Boolean(aa) //true
if (aa) {
    console.log(aa)   //Symbol(1)
}

// Set对象
// 去重
let set = new Set([1, 2, 3, 4, 4, 4, 4, 4, 4, 5, '5'])
console.log(set)    //Set(6) { 1, 2, 3, 4, 5, '5' }
console.log(set.size)
set.add(0)
set.clear()
set.delete(0)
set.has(1)
set.forEach(v => console.log(v)) //按照插入顺序，为set中的每个值调用一次callBackFn
// 注意：set不会转换数据类型

// Map集合：key value 形式，可以是任何数据类型
let map = new Map()
map.set('num1', 11)
map.set('num2', 22)
console.log(map)    //{ 'num1' => 11, 'num2' => 22 }
console.log(map.get('num1'))    //11
for (const [k, v] of map) {
    console.log(k, v)
}

// bind方法 函数.bind(this,实参1，实参2)：返回一个新的函数；改变新函数中this的指向，this指向bind的第一个参数
let ab = {
    name: '呃呃呃呃',
    say() {
        console.log(this.name)
    }
}
ab.say()    //呃呃呃呃
let ba = { name: '欸恩方法' }
let fn1 = ab.say.bind(ba)
fn1()   //欸恩方法

// class:它只是原型链的语法糖表现形式
class A {
    constructor(a, b) {
        this.name = a
        this.age = b
        console.log('constructor')
    }
    say() {
        console.log(this.name, this.age)
    }
}
var a = new A('CXK', 20)
console.log(a)
a.say()

// extends:子类拥有父类所有的属性和方法 声明B类，继承A类，new B 同时就new A
class B extends A {
    run() {
        console.log('this is my house')
    }
}
let bea = new B('zls', 18)
bea.run()

