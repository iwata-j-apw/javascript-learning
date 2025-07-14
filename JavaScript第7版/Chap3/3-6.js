/**
 * Symbol：一意の識別子を持たせることができる
 * ・秘匿プロパティ
 * ・イテレータメソッド
 */
const first = Symbol("text")
const second = Symbol("text")
console.log(first === second)  // => false
console.log(first.toString())  // => Symbol(text)

/**
 * Symbol.for：グローバルで共有されるSymbolで、Rubyでのそれと同じ
 */
const third = Symbol.for("text")
const fourth = Symbol.for("text")
console.log(third === fourth)     // => true
console.log(third.toString())     // => Symbol(text)
console.log(Symbol.keyFor(third)) // => text