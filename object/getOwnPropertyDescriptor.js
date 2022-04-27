//定义多个属性
let book = {};
Object.defineProperties(book, {
    year_: { value: 2017 },
    edition: { value: 1, writable: true },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

let descriptor = Object.getOwnPropertyDescriptor(book, "year_")
console.log(descriptor.value)
console.log(descriptor.configurable)
console.log(typeof descriptor.get)


let descriptors = Object.getOwnPropertyDescriptor(book, "year")
console.log(descriptors.value)
console.log(descriptors.enumerable)
console.log(typeof descriptors.get)