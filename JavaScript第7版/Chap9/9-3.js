/**
 * classキーワード
 * ・クラス定義内では、自動的にstrictモードになる
 * ・クラス宣言に巻き上げはない
 */
class Range {
  /**
   * インスタンスフィールド構文
   * ・constructor関数が走る前に実行される
   * ・#を先頭に付与すると、privateな定義になる
   */
  name = "名無しさん"
  #age = 0

  constructor (from, to) {
    this.from = from
    this.to = to
    this.name = "名有りさん"
    this.#age = 20
  }

  /**
   * 静的メソッド（クラスメソッド）
   * ・コンストラクタ関数のメソッドとして定義される
   * ・Range.prototype.printではなく、Range.printとして定義される。（＝インスタンスからは使用できない）
   */
  static print() {
    console.log("クラスメソッド")
  }

  get name() { return this.name }
  get age() { return this.#age }

  includes(x) { return this.from <= x && x <= this.to }

  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x
  }

  toString() { return `(${this.from}...${this.to})`;}

}

const rangeInstanse = new Range(1, 3)
console.log(rangeInstanse.includes(2))  // => true
console.log(rangeInstanse.toString())   // => (1...3)
console.log([...rangeInstanse])         // => [ 1, 2, 3 ]
