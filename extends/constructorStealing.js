function SuperType() {
    this.colors = ['red', 'green']
}
function SubType() {
    SuperType.call(this)
}
let instance1 = new SubType();
instance1.colors.push("black")
console.log(instance1.colors)   //[ 'red', 'green', 'black' ]
let instance2 = new SubType();
console.log(instance2.colors)   //[ 'red', 'green' ]


/**
 * 向父类构造函数传参
 * @param {} name 
 */
function SuperType(name) {
    this.name = name
}
function SubType() {
    SuperType.call(this, 'Nicholas')
    this.age = 29
}
let instance = new SubType()
console.log(instance.name)  //Nicholas
console.log(instance.age)   //29