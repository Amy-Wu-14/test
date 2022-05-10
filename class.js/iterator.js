class Person {
    *createNicknameIterator() {
        yield 'Jack';
        yield 'jake';
        yield 'J-Dog'
    }

    static *createJobIterator() {
        yield 'Butcher';
        yield 'Baker';
        yield 'Candlestick maker'
    }
}
let jobIter = Person.createJobIterator()
console.log(jobIter.next().value)
console.log(jobIter.next().value)
console.log(jobIter.next().value)
let p = new Person()
let nicknameIter = p.createNicknameIterator()
console.log(jobIter.next().value)
console.log(jobIter.next().value)
console.log(jobIter.next().value)

/**
 * 添加默认迭代器
 */
class Person {
    constructor() {
        this.nicknames = ['Jack', 'Jake', 'J-Dog']
    }
    *[Symbol.iterator]() {
        yield* this.nicknames.entries()
    }
    // 只返回迭代器实例
    [Symbol.iterator]() {
        return this.nicknames.entries()
    }
}
let p = new Person()
for (let [idx, nickname] of p) {
    console.log(nickname)
}
