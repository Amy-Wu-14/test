class Vehicle { }
// 继承类
class Bus extends Vehicle { }
let b = new Bus()
console.log(b instanceof Bus)
console.log(b instanceof Vehicle)

function Person() { }
// 继承普通构造函数
class Engineer extends Person { }
let e = new Engineer()
console.log(e instanceof Engineer)
console.log(e instanceof Person)

class Vehicle {
    identifyPrototype(id) {
        console.log(id, this)
    }
    static identifyClass(id) {
        console.log(id, this)
    }
}

class Bus extends Vehicle { }
let v = new Vehicle()
let b = new Bus()
b.identifyPrototype('bus')
v.identifyPrototype('vehicle')
Bus.identifyClass('bus')
Vehicle.identifyClass('vehicle')
// bus Bus { }
// vehicle Vehicle { }
// bus[class Bus extends Vehicle]
// vehicle[class Vehicle]