function object(o) {
    function F() { }
    F.prototype = o;
    return new F()
}
function createAnother(original) {
    // 通过调用函数创建一个新的对象
    let clone = object(original);
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone
}
let person = {
    name: 'Nicholas',
    friends: ['1', '2']
}
let anotherPerson = createAnother(person)
anotherPerson.sayHi()