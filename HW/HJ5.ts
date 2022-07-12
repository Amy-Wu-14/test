/**
 * 
 * 描述
    写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

    数据范围：保证结果在 1 <= N <= 2^31-1 

    输入描述：
    输入一个十六进制的数值字符串。

    输出描述：
    输出该数值的十进制字符串。不同组的测试用例用\n隔开。
 */
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var num = parseInt(line, 16);
  console.log(num);
});
