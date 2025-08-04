function test(name) {
  const text = `テストだよ、${name}さん`
  console.log(text)
  return text
}

/**
 * 関数の条件付き呼び出し
 * ・関数がnullかundefinedでなければ実行し、実行できなければundefinedを返す
 */
test?.("Koji")

/**
 * メソッドとしての呼びだし
 */
const obj = {
  x: 3,
  y: 5,
  sumValue: 0,
  sum() {
    this.sumValue = this.x + this.y
  }
}
obj.sum()
console.log(obj.sumValue)  // => 8

/**
 * メソッドチェーン
 * ・返り値のない関数は、thisを返しておくと良い
 */

/**
 * 関数の参照スコープ
 */
const obj2 = {
  nonInheritance: function() {
    return this === obj2  // 呼び出された時のレシーバ（obj2）をthisとする
  },
  inheritance: () => {
    return this === obj2  // この関数が定義されたスコープをthisで静的に継承（継承はobj2のもう一個上のスコープ）
  },
}
console.log(obj2.nonInheritance()) // => true
console.log(obj2.inheritance())    // => false