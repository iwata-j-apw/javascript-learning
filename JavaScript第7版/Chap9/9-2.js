/**
 * クラスとコンストラクタ
 * ・インスタンスの同一性は、同じプロトタイプオブジェクトを参照しているかどうかで判定する
 * ・アロー関数はprototypeプロパティを持たない
 */

/**
 * コンストラクタ
 */
function Range(from, to) {
  r.from = from
  r.to = to
}
/**
 * 継承するプロトタイプ
 */
Range.prototype = {
  includes: function(x) { return this.from <= x && x <= this.to },
  [Symbol.iterator]: function*() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x
  },
  toString: function() { return `(${this.from}...${this.to})`;}
}

/**
 * newの挙動
 * 1. 9-1.jsのようにして、空のオブジェクトを作成する
 * 2. 関数にprototypeを設定する
 * 3. Range関数のコンストラクタを実行する
 */
const rangeInstanse = new Range(1, 3)
console.log(rangeInstanse.includes(2))  // => true
console.log(rangeInstanse.toString())   // => (1...3)
console.log([...rangeInstanse])         // => [ 1, 2, 3 ]

console.log(rangeInstanse instanceof Range)  // => true
