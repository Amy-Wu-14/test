/**
 * ===&Object.is()
 */
console.log(true === 1) //false
console.log({} === {}) //false
console.log("2" === 2) //false

// js引擎中表现不同
console.log(+0 === -0) //true
console.log(+0 === 0) //true
console.log(-0 === 0) //true

// NaN的相等判断
console.log(NaN === NaN) //false
console.log(isNaN(NaN)) //true

console.log(Object.is(true, 1)) //false
console.log(Object.is({}, {})) //false
console.log(Object.is("2", 2)) //false
console.log(Object.is(+0, -0)) //false
console.log(Object.is(+0, 0))//true
console.log(Object.is(0, -0)) //false
console.log(Object.is(NaN, NaN)) //true

// 要检查超过两个值
function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
}
console.log(recursivelyCheckEqual(1, 1, 1)) //true
