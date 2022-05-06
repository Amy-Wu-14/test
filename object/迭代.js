// 符号属性会被忽略
const sym = Symbol();
let o = {
    foo: 'bar',
    baz: 1,
    qux: {},
    [sym]: 0
}
const l = Object.values(o)
o.foo = 'b'
// console.log(Object.entries(o))
console.log(Object.values(o)[0])


