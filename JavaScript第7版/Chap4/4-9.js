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

// 次回、P.90 4.9.3からスタート
