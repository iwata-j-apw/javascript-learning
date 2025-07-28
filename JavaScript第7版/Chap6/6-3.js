/**
 * プロパティアクセス方法
 * ・[]でのアクセスは、JSの持つデータ型での指定になるので融通が利きやすく、プログラムの中でも動的に扱うことができて便利
 */ 
const obj = {
  name: "jp",
  age: 22,
}
console.log(obj.name)   // => jp（静的指定向き）
console.log(obj["age"]) // => 22（動的指定向き）

/**
 * プロパティチェーン
 */
let radius = { r: 1 }
const obj2 = Object.create(radius)
obj2.x = 1
obj2.r = 2
console.log(obj2.r)   // => 2
console.log(radius.r) // => 1（継承先は変更しないため安全）

/**
 * プロパティアクセスでのエラー
 */
const book = {
  title: "タイトル",
  price: 2500
}
console.log(book.publishedAt)         // => undefined
console.log(book.publishedAt.length)  // => TypeError
const length = book.publishedAt && book.publishedAt.length
console.log(length)                   // => undefined