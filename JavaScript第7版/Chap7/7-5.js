/**
 * 配列の代入
 */
const array1 = [1, 2]
array1[array1.length] = 3
console.log(array1)       // => [1, 2, 3]

/**
 * 要素の削除
 */
const array2 = [1, 2, 3]
delete array2[1]
console.log(1 in array2)   // => false（インデックス１に要素がない）
console.log(array2.length) // => 3（疎な配列ができた）