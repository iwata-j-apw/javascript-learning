/**
 * 配列の長さ
 * ・lengthプロパティは配列独特
 * ・lengthプロパティの値以上のインデックス要素は削除される
 */
const array = [1, 2, 3, 4, 5]
array.length = 3
console.log(array)   // => [1, 2, 3]
array.length = 0
console.log(array)   // => []
array.length = 5
console.log(array)   // => [,,,,]