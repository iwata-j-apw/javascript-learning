// 優先順位が付けられないため、文法エラーが出る例（仕様）
// console.log(-3 ** 2) // => SyntaxError
console.log((-3) ** 2)  // => 9

/**
 * 算術演算の注意ポイント
 * ・NaNを含む演算は、全てNaNが返り値
 * ・その他
 */
console.log(NaN - 2)         // => NaN
console.log(1 + 2 + "test")  // => "3test"

/**
 * インクリメント
 */
let an = 1, am = ++an
let bn = 1, bm = bn++
console.log(`an:${an}, am:${am}`)  // => an:2, am:2
console.log(`bn:${bn}, bm:${bm}`)  // => bn:2, bm:1

/**
 * ビット演算子
 * 後日フラグ
 */