class Vehicle {
    constructor() {
        console.log(new.target)
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated')
        }
    }
}
class Bus extends Vehicle { }
new Bus()   //[class Bus extends Vehicle]
new Vehicle()   //[class Vehicle]
//throw new Error('Vehicle cannot be directly instantiated')

/**
 * 要求派生类必须定义某个方法：通过在抽象类构造函数中进行检查
 */
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be directly instantiated')
        }
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()')
        }
        console.log('success!')
    }
}

class Bus extends Vehicle {
    foo() { }
}
class Van extends Vehicle { }
new Bus()   //success!
new Van()   //throw new Error('Inheriting class must define foo()')