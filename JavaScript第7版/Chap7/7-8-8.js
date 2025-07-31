/**
 * Array.isArrayメソッド
 * ・引数に渡したものが配列ならtrueを返す
 */
console.log(Array.isArray([]));          // => true
console.log(Array.isArray([1, 2, 3]));   // => true
console.log(Array.isArray(new Array())); // => true
console.log(Array.isArray("array"));     // => false
console.log(Array.isArray(123));         // => false
console.log(Array.isArray({length: 0})); // => false
console.log(Array.isArray(null));        // => false
console.log(Array.isArray(undefined));   // => false