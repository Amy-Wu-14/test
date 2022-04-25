/**
 * 同步和异步执行顺序：先同后异
 */
setTimeout(() => {
    console.log(1)
}, 20);
console.log(2)
setTimeout(() => {
    console.log(3)
}, 10);
console.log(4)
console.time("AA")
for (let index = 0; index < 90000000; index++) {

}
console.timeEnd("AA") //AA:44ms
console.log(5)
setTimeout(() => {
    console.log(6)
}, 20);
console.log(7)
setTimeout(() => {
    console.log(8)
}, 10);

/**
 *  问题：输出的数字顺序？
 * 
 *  答案：
 *  假设单行命令运行时间为0ms
 *  因为调用栈 先同后异原则
 *  所以 输出 2，4，5，7
 *  异步队列中
 *  1的延时时间为20ms
 *  3的等待时间为10ms
 *  6的等待时间为44+20=64ms
 *  8的等待时间为44+10=54ms
 * 
 *  所以输出循序：2，4，5，7，3，1，8，6
 * 
 */

