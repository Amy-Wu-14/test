function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}
function SubType() {
    this.subpropertype = false
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
}
let instance = new SubType();
console.log(instance.getSuperValue())
console.log(SubType.prototype.constructor)
console.log(SubType.prototype)
console.log(instance.constructor)
console.log(SubType.prototype instanceof constructor)