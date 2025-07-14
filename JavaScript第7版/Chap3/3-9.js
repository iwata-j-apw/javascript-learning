/**
 * 暗黙の方変換
 */
console.log(10 + "percent")  // => 10percent
console.log("10" * "10")     // => 100
console.log(10 - "x")        // => NaN
console.log(NaN + "x")       // => NaNx

/**
 * 明示的な型変換
 */
console.log(Number("10"))          // => 10
console.log(parseInt("10a"))       // => 10
console.log(parseFloat("10.23a"))  // => 10.23
console.log(String(10))            // => 10 (String)
console.log(Boolean(10))           // => true

console.log(10+"")                 // => 10 (String)
console.log(+"10")                 // => 10 (Number)
console.log("10"-0)                // => 10 (Number)
console.log(!!10)                  // => true

/**
 * 四捨五入関連
 * ・toFixed
 * ・toExponetial
 * ・toPrecision
 */

/**
 * オブジェクトから基本型への変換
 * 後日フラグ
 */