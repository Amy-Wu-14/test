/**
 * macro-task 宏任务：settimeout,setInterval,setImmediate,requestAnimationFrame,I/0流，UI render,ajax请求
 * micro-task 微任务：process.nextTick,Promise.then(),Async/Await,MutationObserver
 * 调用原则：先微后宏
 */
async function async1() {
    console.log("A")
    await async2()
    console.log("B")
}
async function async2() {
    console.log("C")
}
console.log("D")
setTimeout(() => {
    console.log("E")
}, 0);

async1()

new Promise(function (resolve) {
    console.log("F")
    resolve()
}).then((res) => {
    console.log("G")
})

console.log("H")

// 同步-> 异步 ->微任务 ->宏任务,console.log("B")是微任务

/**
 * test2
 */
const button = document.getElementById("button")
button.addEventListener("click", () => {
    Promise.resolve().then(() => { console.log("Microtask 1") })
    console.log("Listener 1")
})

button.addEventListener("click", () => {
    Promise.resolve().then(() => { console.log("Microtask 2") })
    console.log("Listener 2")
})

/**
 * 触发方式1：在浏览器上点击按钮
 * 执行结果：L1M1L2M2
 * 触发方式2：执行button.
 * 执行结果：L1L2M1M2
 */

// button.click()


/**
 * 结果解析：
 * 手动点击按钮：调用栈中有两个任务listen1&listen2
 * 代码触发时：调用栈中有一个执行方法就是button.click
 */