// 合并原理：
// 1.每个源对象中可枚举和自有属性
// 可枚举：Object.propertyIsEnumerable() == true
// 自有：Object.hasOwnProperty() == true
// 2.以字符串和符号为键的属性
// 3.符合条件的属性，[[get]]获取属性值，用[[Set]]设置属性值。
let dest, src, result;
/**
 * 简单复制
 */
dest = {};
src = { id: 'src' };
result = Object.assign(dest, src);

//Object.assign 修改目标对象
//也会返回修改后的目标对象
console.log(dest === result)//true
console.log(dest !== src)   //true
console.log(result)         //{id:src}
console.log(dest)           //{id:src}

/**
 * 多个源对象
 */
dest = {};
result = Object.assign(dest, { a: 'foo' }, { b: 'bar' })
console.log(result) //{ a: 'foo', b: 'bar' }

/**
 * 获取函数与设置函数
 */
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`)
    }
}
src = {
    get a() {
        console.log('Invoked src getter');
        return 'foo'
    }
}
Object.assign(dest, src);
// 调用src的获取方法
// 调用dest的设置方法并传入参数'foo'
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest)  //{ a: [Setter] }

/**
 * 实质是浅复制
 */
//多个源对象都有相同属性，则使用最后一个复制的值
dest = { id: 'dest' };
result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
//Object.assign 会覆盖重复的属性
console.log(result) //{ id: 'src2', a: 'foo', b: 'bar' }


// 可以通过目标对象上的设置函数观察到覆盖的全过程
dest = {
    set id(x) {
        console.log(x)
    }
}
Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' })
// first
// second
// third

/**
 * 对象引用
 */
dest = {};
src = { a: {} };
Object.assign(dest, src)
// 浅复制意味着只会复制对象的引用
console.log(dest);
console.log(dest.a === src.a)
// { a: { } }
// true

// 如果赋值期间出错，则会终止并抛出错误
/**
 * 错误处理
 */
dest = {}
src = {
    a: 'foo',
    get b() {
        // Object.assign()在调用这个获取函数时会抛出错误
        throw new Error();
    },
    c: 'bar'
}
try {
    Object.assign(dest, src);
} catch (e) {

}
// Object.assign()没办法回滚已经完成的修改
// 因此在抛出错误之前，目标对象上已经完成的修改会继续存在
console.log(dest)   //{ a: 'foo' }