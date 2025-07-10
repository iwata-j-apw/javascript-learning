/**
 * JavaScriptでは、64ビット浮動小数点形式で数値を表現する
 * 32ビット整数での扱いについては特定のケースのみで扱われる（イテレータのインデックスやビット演算子など）
 */

/**
 * 2進数（binary）、8進数（octal）、16進数（hexadecimal）を表現することが可能。
 * decimalは10進数という意味
 */
console.log(0b11) // => 3
console.log(0o77) // => 63
console.log(0xff) // => 255

/**
 * 浮動小数点リテラルの表現
 */
console.log(6.02e23)       // => 6.02e+23
console.log(1_000_000)     // => 1000000
console.log(0.123_456_789) // => 0.123456789
console.log(.1)            // => 0.1
console.log(0x89_AB_CD)    // => 9022413（バイト単位で区切る）
console.log(.3 - .2)       // => 0.09999999999999998（整数領域で計算する・丸めるなどの工夫が必要）

/**
 * 複雑な数値演算
 * ・値の丸め込み
 * ・絶対値の算出
 * ・最大値と最小値の抽出
 * ・乱数の生成
 * ・数学的関数 など
 */

/**
 * 計算できない例
 * ・計算に失敗してもエラーを出力しない
 * ・NaNはいかなる比較に対してもfalseを返すので、比較する際はNumber.isNaN()を使用する
 */
console.log(1 / 0)      // => Infinity（Number.POSITIVE_INFINITYとしても用意されている）
console.log("test" / 0) // => NaN

/**
 * BigInt型
 * 通常の数値型で扱えない、大きな整数を扱いたい場合に使用する
 */
console.log(100n + 200n) // => 300n
console.log(100n > 50)   // => true
console.log(100n > 200)  // => false

/**
 * Date型で日付を扱う
 */
console.log(Date.now()) // => 1752107784778
const now = new Date()
console.log(now)        // => 2025-07-10T00:36:49.743Z
console.log(now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));  // => 2025/7/10 9:37:55