/**
 * 配列要素の追加と削除
 * ・配列の末尾での操作
 * 　・pushメソッド
 * 　・popメソッド
 * ・配列の先頭での操作
 * 　・shiftメソッド：先頭の要素を消す
 * 　・unshiftメソッド：先頭に要素を追加する
 */
const stack = []
stack.push(1)      // => 1（返り値は配列の長さ）
stack.push([4, 5]) // => 3
stack.pop()        // => [4, 5]（削除した要素の値）
console.log(stack) // => [1]

const queue = []
queue.push(4, 5, 6)
queue.shift()         // => [5, 6]（現在の配列の状態を返す）
queue.unshift(4)      // => [4, 5, 6]
queue.unshift(10, 20) // => [10, 20, 4, 5, 6]（引数に渡した順番で挿入される）