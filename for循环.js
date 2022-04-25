/**
 * for：是最早出现的一方遍历语句，在座的各位需称我一声爷爷。我能满足开发人员的绝大多数的需求。
 */
// 遍历数组
let array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
// 遍历对象
let profile = {
    name: 'April',
    nickname: "27",
    country: "China"
}

for (let index = 0, keys = Object.keys(profile); index < keys.length; index++) {
    const element = profile[keys[index]];
    console.log(element)
}
// 遍历字符串
let str = 'abcdef'
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    console.log(element)
}
// 遍历Dom节点
// let articleParagraphs = document.querySelectorAll('.article > p');
// for (let index = 0; index < articleParagraphs.length; index++) {
//     articleParagraphs[i].classList.add('paragraph')
// }

/**
 * ES5版本
 * forEach ：按升序为数组中含有效值的每一项执行一次 callback 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。我是 for 循环的加强版。
 */
// 遍历数组
array.forEach(i => console.log(i))

// 遍历对象
let keys = Object.keys(profile)
keys.forEach(i => {
    console.log(profile[i])
})

/**
 * ES5版本
 * map:我可以创建一个新数组，新数组的结果是原数组中的每个元素都调用一次提供的函数后的返回值。
 */
let res = array.map(i => i * i)
console.log(res)

/**
 * ES5版本
 * for...in枚举：以任意顺序遍历一个对象的除Symbol以外的可枚举属性。
 */
// 遍历对象
for (const key in profile) {
    const item = profile[key]
    console.log(item)
}

// 遍历数组
for (const i in array) {
    let item = array[i]
    console.log(item)
}

// 遍历字符串
for (const key in str) {
    let item = str[key]
    console.log(item)
}

/**
 * ES6版本
 * for..of迭代：在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。
 */
// 迭代数组
for (const item of array) {
    console.log(item)
}
// 迭代字符串
for (const value of str) {
    console.log(value)
}
// 迭代map
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]])
for (const entry of iterable) {
    console.log(entry)
}
// 迭代map获取键值
for (const [key, value] of iterable) {
    console.log(key)
    console.log(value)
}
// 迭代set
iterable = new Set([1, 1, 2, 2, 3, 3, 4])
for (const value of iterable) {
    console.log(value)
}

// 迭代Dom节点
// for (const paragraph of articleParagraphs) {
//     paragraph.classList.add('paragraph')
// }

// 迭代arguments类数组对象
(
    function () {
        for (const argument of arguments) {
            console.log(argument)
        }
    }
)(1, 2, 3)

// 迭代类型数组
let typeArr = new Uint8Array([0x00, 0xff])
for (const value of typeArr) {
    console.log(value)
}

/**
 * 总结：
 * for语句是最原始的循环语句。定义一个变量i(数字类型，表示数组的下标),按照一定的条件，对i进行循环累加。条件通常为循环对象的长度，当超过长度就停止循环。因为对象无法判断长度，所以搭配Object.keys()使用。
 * forEach ES5 提出。自称是for语句的加强版，可以发现它比for语句在写法上简单了很多。但是本质上也是数组的循环。forEach每个数组元素执行一次 callback 函数。也就是调用它的数组，因此，不会改变原数组。返回值是undefine。
 * map  ES5 提出。给原数组中的每个元素都按顺序调用一次  callback 函数。生成一个新数组，不修改调用它的原数组本身。返回值是新的数组。
 * for...in  ES5 提出。遍历对象上的可枚举属性，包括原型对象上的属性，且按任意顺序进行遍历，也就是顺序不固定。遍历数组时把数组的下标当作键值，此时的i是个字符串型的。它是为遍历对象属性而构建的，不建议与数组一起使用。
 * for...of ES6 提出。只遍历可迭代对象的数据。
 */

/**
 * 跳出循环
 * break语句是跳出当前循环，并执行当前循环之后的语句；
 * continue语句是终止当前循环，并继续执行下一次循环;
 * 注意：forEach 与map 是不支持跳出循环体的，其它三种方法均支持。
 * 原理 ：查看forEach实现原理，就会理解这个问题。Array.prototype.forEach(callbackfn[, thisArg]){ }
 * 传入的function是这里的回调函数。在回调函数里面使用break肯定是非法的，因为break只能用于跳出循环，回调函数不是循环体。
 * 在回调函数中使用return，只是将结果返回到上级函数，也就是这个for循环中，并没有结束for循环，所以return也是无效的。map()同理。
*/

/**
 * map()链式调用：方便结合其他方法使用。例如：reduce（），sort（），filter（）等。其他防范返回值是undefined，所以无法链式调用。
 */

/**
 * for...in 会遍历出原型对象上的属性
 */
Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { }
var arr = ['a', 'b', 'c']
arr.foo = 'hello'
for (const i in arr) {
    // log:
    // 0
    // 1
    // 2
    // foo
    // arrCustom  原型属性
    // objCustom  原型属性
    console.log(i)
}
for (const key of arr) {
    // log
    // a
    // b
    // c
    console.log(key)
}

for (const i in arr) {
    // 使用hasOwnProperty() 方法，它会返回一个布尔值，指示对象自身属性中是否具有指定的属性
    // log:
    // 0
    // 1
    // 2
    // foo  数组本身的属性还是无法摆脱。此时建议使用forEach
    if (Object.hasOwnProperty.call(arr, i)) {
        console.log(i)

    }
}

/**
 * 总结：
 * 对于纯对象的遍历：for...in枚举更方便
 * 对于数组的遍历：如果不需要知道索引：for...of,因为可以中断；如果需要知道索引：forEach()
 * 对于其他字符串，类数组，类型数组的迭代：for...of
 * 
 * 但是注意低版本的浏览器适配
 * 
 */

/**
 * 性能：
 * for > for-of > forEach > map > for-in
 * 
 * for是最简单的，因为他没有任何额外的函数调用栈和上下文
 * for-of只要具有Itertator接口的数据结构，都可以使用它迭代成员。他直接读取的是键值。
 * forEach,因为它其实比我们想象的要复杂一些，它实际是array.forEach(function(currentValue,index,arr),thisValue)它不是普通的for循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能。
 * map()最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。
 * for...in 需要穷举对象的所有属性，包括自定义的添加的属性也能遍历到。且for...in的key是string类型，有转换过程，开销比较大。
 * 
 */

/**
 * 在实际开发中我们要结合语义话、可读性和程序性能，去选择究竟使用哪种方案。

    如果你需要将数组按照某种规则映射为另一个数组，就应该用 map。

    如果你需要进行简单的遍历，用 forEach 或者 for of。

    如果你需要对迭代器进行遍历，用 for of。

    如果你需要过滤出符合条件的项，用 filterr。

    如果你需要先按照规则映射为新数组，再根据条件过滤，那就用一个 map 加一个 filter。

    总之，因地制宜，因时而变。千万不要因为过分追求性能，而忽略了语义和可读性。在您的统治之下，他们5个只能是各自发挥长处，谁都别想称霸。
 */

let numList = [], start, end
for (let index = 0; index < 1000000; index++) {
    numList.push(index)
}
start = new Date()

// 3.001 s
for (let index = 0; index < numList.length; index++) {
    console.log(numList[index])
}
// 3.082 s
for (const item of numList) {
    console.log(item)
}
// 3.283 s

numList.forEach(element => {
    console.log(element)
});

// 3.385
numList.map((i) => console.log(i))

// 3.594
for (const key in numList) {
    if (Object.hasOwnProperty.call(numList, key)) {
        const element = numList[key];
        console.log(element)
    }
}
end = new Date()
console.log(end - start)
