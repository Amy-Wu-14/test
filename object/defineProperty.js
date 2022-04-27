//数据属性
//严格模式下，使用definedProperty会报错

let person = {};
Object.definedProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
console.log(person.name) //"Nicholas"
person.name = "Greg";
console.log(person.name) //"Nicholas"

let person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
})
console.log(person.name) //"Nicholas"
delete person.name
console.log(person.name) //"Nicholas"

//当configurable=false后，就不能再被改为true了。
Object.defineProperty(person, "name", {
    //抛出错误
    configurable: true,
    value: "Nicholas"
})


//访问器属性
// 定义一个对象，包含私有成员year_和公共成员edition

let book = {
    year_: 2017,
    edition: 1
};
Object.defineProperty(book, "year", {
    configurable: true,
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.year = 2018;
console.log(book.edition); //2