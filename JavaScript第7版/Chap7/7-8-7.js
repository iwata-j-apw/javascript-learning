/**
 * joinメソッドとString.splitメソッド
 * ・配列と文字列の間での変換（不可逆）
 * ・可逆で変換したいなら、JSON.stringify
 */
let arr = [1, 2, 3, 4, 5];
console.log(arr.join());     // => "1,2,3,4,5"
console.log(arr.join("-"));  // => "1-2-3-4-5"
console.log(arr.join(""));   // => "12345"
let str = "hello world";
console.log(str.split(" ")); // => [ 'hello', 'world' ]
console.log(str.split(""));  // => [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

/**
 * 配列に対するtoStringメソッド
 */
let nums = [1, 2, 3];
console.log(nums.toString());   // => "1,2,3"
let nested = [1, [2, 3], 4];
console.log(nested.toString()); // => "1,2,3,4"
let mixed = [1, null, undefined, true, "hello"];
console.log(mixed.toString());  // => "1,,,true,hello"