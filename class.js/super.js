class Vehicle {
    constructor() {
        this.hasEngine = true
    }
    static identify() {
        console.log('vehicle')
    }
}
class Bus extends Vehicle {
    constructor() {
        // 不要在调用super()之前引用this，否则会抛出ReferenceError
        super();
        console.log(this instanceof Vehicle)
        console.log(this)
    }
    static identify() {
        super.identify()
    }
}
new Bus
// true
// Bus { hasEngine: true }
Bus.identify()  //vehicle
