function createStudent(name, sex, grade) {
    var o = new Object();
    o.name = name;
    o.sex = sex;
    o.grade = grade;

    o.sayName = function () {
        console.log(this.name);
    }
    return o;
}
var s1 = createStudent('Claiyre', 'famale', 1);
var s2 = createStudent('Greg', 'male', 11);
console.log(s1 instanceof createStudent)
console.log(s1 instanceof Object)

function Person(name, sex, grade) {
    Person.prototype.name = name;
    Person.prototype.sex = sex;
    Person.prototype.grade = grade;

    Person.prototype.sayName = function () {
        // console.log(this.name);
    }
}
var s1 = new Person('Claiyre', 'famale', 1);
var s2 = new Person('Greg', 'male', 11);
console.log(s1.sayName == s2.sayName)

let k1 = Symbol(1)
let k2 = Symbol(2)
let o = {
    [k1]: '1',
    [k2]: '2',
    name: 'test'
}
o.prototype = Object.create({
    age: 2
})

console.log(Object.getOwnPropertySymbols(o))
console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertyDescriptors(o))
console.log(o.age)
console.log(Object.getPrototypeOf(o))
console.log(Object.getOwnPropertyNames(Object))

{
    function FunctionDeclaration() { }
    class ClassDeclaration { }
}
console.log(FunctionDeclaration)
console.log(ClassDeclaration)