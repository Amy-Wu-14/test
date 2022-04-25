/**
 * 把async await 改写为promise，考核点微任务
 */
async function async1() {
    console.log("A")
    await async2()
    console.log("B")
}

function async2() {
    console.log("C")
}
async1()
console.log("D")

function _async1() {
    console.log("a")        //同步
    new Promise((resolve) => {
        console.log("c")    //同步
        resolve()
    }).then((res) => {
        console.log("b")    //异步:同步都执行完后，才会执行异步
    })
}
_async1()
console.log("d")
for (let index = 0; index < 900000000; index++) {
}
console.log("e")
