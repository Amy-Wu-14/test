/**
 * 代码全部执行过后，
 * 栈内存：会随着ESP下移来销毁执行上下文
 * 堆内存：两个{ name: " 极客邦 " }对象仍会占用空间，需要垃圾回收器。
 * 
 * 回收时间：程序主线程空闲时
 * 
 * 代际假说：很多对象在内存中存在的时间很短
 * 特点：1.大部分对象在内存中存在的时间很短。2.不死的对象，会活的更久。
 * 
 * 分代堆布局：老生代和新生代
 * 新生代：‘nursery’（from-space） 子代和 ‘intermediate’ (to-space)子代
 * 对象储存：如果一直未回收，会从from-space——>to-space——>老生代
 * 
 * 两种垃圾回收器：主垃圾回收器和副垃圾回收器
 * 主垃圾回收器（Mark-Sweep & Mark-Compact）从整个堆中回收垃圾，副垃圾回收器（Scavenger）从新生代中回收垃圾。
 */
function foo() {
    var a = 1
    var b = { name: " 极客邦 " }
    function showName() {
        var c = " 极客时间 "
        var d = { name: " 极客时间 " }
    }
    showName()
}
foo()
var g = 'g'
class fo {

    constructor(props) {

        var a = 1
        var b = { name: " 极客邦 " }
    }

    showName() {
        var c = " 极客时间 "
        var d = { name: " 极客时间 " }
        console.log(g)
    }
}

var obj = new fo()
console.log(obj)

obj.showName()