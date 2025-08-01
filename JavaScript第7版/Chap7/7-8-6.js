/**
 * 配列の検索とソート
 */

/**
 * indexOf/lastIndexOfメソッド
 * ・配列の中から、第一引数で渡した値と一致する要素のインデックス番号を返す
 * ・等価判定は===演算子で行われる
 */
const array1 = [0, 1, 2, 3, 1, 5]
array1.indexOf(1)      // => 1
array1.lastIndexOf(1)  // => 4
array1.indexOf(1, 2)   // => 4（第二引数は開始インデックス番号）

/**
 * includesメソッド
 * ・引数で指定した値が配列に含まれているかどうかを真偽値で返す
 * ・NaNであっても適切に検索することができる
 */
const array2 = [0, 1, 3, NaN]
array2.includes(1)    // => true
array2.includes(2)    // => false
array2.includes(NaN)  // => true

/**
 * sortメソッド
 * ・既存の配列をソートする
 * ・ソート関数を渡さない場合、undefinedは配列の最後にいく
 */
const array3 = [30, 20, 100, 50]
array3.sort()  // => [100, 20, 30, 50]（デフォルトは文字列として評価される）
array3.sort((a, b) => {
  return b - a
})             // => [20, 30, 50, 100]

/**
 * reverceメソッド
 * ・メソッドを適用した配列の要素が反転する（副作用あり）
 */
const array4 = [0, 1, 2, 3, 4]
array4.reverse()   // => [4, 3, 2, 1, 0]