class SuperArray extends Array {
    shuffle() {
        // 洗牌算法
        for (let i = this.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this[i], this[j]] = [this[j], this[i]]
        }
    }
}
let a = new SuperArray(1, 2, 3, 4, 5)
console.log(a instanceof Array)
console.log(a instanceof SuperArray)
console.log(a)
a.shuffle()
console.log(a)

/**
 * 内置类型的方法返回的实例的类型与原始实例的类型是一致的。
 */
class SuperArray extends Array { }
let a1 = new SuperArray(1, 2, 3, 4, 5)
let a2 = a1.filter(x => !!(x % 2))
console.log(a1) //SuperArray(5)[1, 2, 3, 4, 5]
console.log(a2) //SuperArray(3)[1, 3, 5]
console.log(a1 instanceof SuperArray)   //true
console.log(a2 instanceof SuperArray)   //true


/**
 * Symbol.species访问器决定了在创建返回的实例时使用的类
 */

class SuperArray extends Array {
    static get [Symbol.species]() {
        return Array
    }
}

let a1 = new SuperArray(1, 2, 3, 4, 5)
let a2 = a1.filter(x => !!(x % 2))
console.log(a1) //SuperArray(5)[1, 2, 3, 4, 5]
console.log(a2) //SuperArray(3)[1, 3, 5]
console.log(a1 instanceof SuperArray)   //true
console.log(a2 instanceof SuperArray)   //false