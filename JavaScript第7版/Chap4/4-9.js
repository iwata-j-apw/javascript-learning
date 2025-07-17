/**
 * 同値演算子
 * ・NaNは、自身を含めてどの値とも等しくならない
 * ・文字列のエンコード方法が違う場合は、同じ意味の文字列でも異なると判定される
 */
console.log(NaN === NaN)  // => false
console.log(isNaN(NaN))   // => true
console.log(0 === -0)     // => true

/**
 * 等値演算子
 * ・基本的には数値に変換してから比較される
 */
console.log(1 == true)    // => true
console.log("1" == true)  // => true

/**
 * 比較演算子
 * ・文字列か数値のどちらかで処理される（両方が文字列なら文字列、片方が数値なら数値として演算される）
 */
console.log("11" < "3")   // => true（文字列として比較）
console.log("11" < 3)     // => false（数値として比較）
console.log("eleven" < 3) // => false（文字列をNaNに変換してから比較）

/**
 * in演算子
 * ・オブジェクトなら、キーに含まれるかどうかをチェック
 * ・配列なら要素に含まれるかをチェック
 */
const point = { x: 2, y: 3 }
console.log("x" in point)         // => true
console.log("z" in point)         // => false
console.log("toString" in point)  // => true（オブジェクトはtoStringメソッドを持つため）
const range = [1, 2, 3, 4]
console.log("0" in range)         // => true（配列には要素"0"が存在する、インデックス）
console.log(1 in range)           // => true
console.log(10 in range)          // => false

/**
 * instanceof演算子
 * f.prototypeを評価し、プロトタイプチェーンの中に含まれていればtrueを返す
 */
const now = new Date()
console.log(now instanceof Date)    // => true
console.log(now instanceof Object)  // => true
console.log(now instanceof Number)  // => false