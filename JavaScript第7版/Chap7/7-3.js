/**
 * 疎な配列
 * ・インデックスアクセスの時間は、密な配列と変わらない
 * ・メモリ効率が良くなる
 */
const array1 = new Array(10)
const array2 = new Array(undefined, undefined)
console.log(0 in array1)  // => false
console.log(0 in array2)  // => true