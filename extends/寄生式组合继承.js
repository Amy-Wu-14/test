function object(o) {
    function F() { }
    F.prototype = o;
    return new F()
}
function inheritPrototype(subType, superType) {
    // 创建对象：创建了父类原型的副本
    let prototype = object(superType.prototype);
    // 增强对象：解决由于重写原型丢失constructor的问题
    prototype.constructor = subType;
    // 赋值对象
    subType.prototype = prototype
}

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function SubType(name, age) {
    //继承属性
    SuperType.call(this, name)
    this.age = age
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
    console.log(this.age)
}