/**
 * JavaScriptのクラス
 * ・プロトタイプベースの継承を行う
 */
function range(from, to) {
  // ファクトリ関数を使用して初期化することで、全てのインスタンスが同じ関数を共有できるようになっている
  let r = Object.create(range.method)
  r.from = from
  r.to = to
  return r
}

/**
 * ファクトリ関数
 * ・クラスインスタンスを生成し初期化する
 */
range.method = {
  includes(x) { return this.from <= x && x <= this.to },
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x
  },
  toString() { return `(${this.from}...${this.to})`;}
}

const rangeInstanse = range(1, 3)
console.log(rangeInstanse.includes(2))  // => true
console.log(rangeInstanse.toString())   // => (1...3)
console.log([...rangeInstanse])         // => [ 1, 2, 3 ]