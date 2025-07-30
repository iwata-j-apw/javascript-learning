/**
 * インデックス付きのイテレーション
 * ・entriesメソッドを使用すると、インデックス番号を取り出すことができる
 */
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let even = ""
for(let [index, num] of numbers.entries()){
  if(index % 2 === 0) even += String(num)
}
console.log(even)

/**
 * 配列の長さをイテレーションごとに読み出さない（現在のJSインタプリタでどれほどパフォーマンス面で効果があるかは分からない）
 */
for(let i = 0, len = numbers.length; i < len; i++) {
  // ループ本体
}