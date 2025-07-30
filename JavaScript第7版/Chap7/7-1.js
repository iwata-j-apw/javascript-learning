/**
 * 配列（特殊なオブジェクト）
 * ・オブジェクトのインデックスが数値になっただけでなく、最適化もされているのでオブジェクトより高速なアクセスが可能
 */

/**
 * 配列リテラル
 */
const empty = []
const undefs = [,,]
console.log(undefs.length)  // => 2

/**
 * 浅いコピー（shallow copy）
 */
const original = [1, 2, 3, 4, 5]
const shallowCopy = [...original]
shallowCopy[0] = 100
console.log(original[0], shallowCopy[0])  // => 1 100 

/**
 * Arrayコンストラクタ
 * ・Array.of関数は、引数の数に関係なく、引数を要素とする配列を作成する
 * ・Array.from関数は、引数に受け取った配列の浅いコピー＋真の配列オブジェクトを返す（jsonデータなどの復元に使える？）
 */
const empty2 = new Array();             // 空の配列を作成する
const array1 = new Array(10);           // 数値を1つだけ引数にして呼び出すと、配列の長さを指定することになる
console.log(array1[1]);                 // => undefined
const array2 = new Array(10, 4, "test") // 引数が2つ以上なら、それぞれを要素とする配列が作成される
console.log(array2)                     // => [10, 4, "test"]
const array3 = new Array.of(10)         
console.log(array3)                     // => [10]
const array4 = new Array.from(array2)   // [...array2]と同じ
console.log(array4)                     // => [10, 4, "test"]