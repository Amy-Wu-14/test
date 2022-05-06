/**
 * 原始值不能动态添加属性
 * 引用值可以随时增删改其属性和方法
 */
let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age) //undefined
console.log(name2.age) //26
console.log(typeof name1) //string
console.log(typeof name2) //object
const a = 1