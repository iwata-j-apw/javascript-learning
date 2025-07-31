/**
 * 配列イテレータメソッド
 * ・第一引数に関数をとる（アロー関数でのインライン定義が便利）
 * ・要素の値/インデックス/配列自身の3つの引数が関数に渡されることが多い
 */

/**
 * forEachメソッド
 * ・要素ごとに指定された関数を呼び出す
 * ・疎な配列に対しては処理をしない
 */
let arr = [1, 2, 3, 4, 5];
arr.forEach((val, idx, arry) => arry[idx] = val ** 2); 
console.log(arr)                     // => 1, 4, 9, 16, 25
let sparse = [1, , 3];
sparse.forEach(v => console.log(v)); // => 1, 3

/**
 * mapメソッド
 * ・mapメソッド自体が新しい配列を返す（全ての処理が終わると返す）
 * ・疎は疎のまま
 */
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(x => x * 2);
console.log(doubled);   // => [ 2, 4, 6, 8, 10 ]
let sparseMap = [1, , 3].map(x => x * 2);
console.log(sparseMap); // => [ 2, <1 empty item>, 6 ]

/**
 * filterメソッド
 * ・述語関数の返り値がtrueになるような値だけの配列を返す
 */
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = arr2.filter(x => x % 2 === 0);
console.log(evens); // => [ 2, 4, 6, 8, 10 ]
let sparse2 = [1, null, , undefined, 5, , 6];
let dense = sparse2.filter(x => x != null);
console.log(dense); // => [ 1, 5, 6 ]

/**
 * findメソッド
 * ・述語関数がtrueになるような配列を先頭から巡回して探し、見つかり次第その要素を返して処理を中止する。
 * ・見つからなければundefinedを返す
 */
let arr3 = [1, 3, 5, 2, 7, 4, 6];
let firstEven = arr3.find(x => x % 2 === 0);
console.log(firstEven); // => 2
let notFound = arr3.find(x => x > 10);
console.log(notFound); // => undefined

/**
 * findIndexメソッド
 * ・findメソッドのインデックスバージョンで、見つからなければ-1を返す
 */
let arr4 = [1, 3, 5, 2, 7, 4, 6];
let firstEvenIndex = arr4.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex); // => 3
let notFoundIndex = arr4.findIndex(x => x > 10);
console.log(notFoundIndex); // => -1

/**
 * everyメソッド
 * ・述語関数が全てtrueを返した場合にtrueを返す
 * ・述語関数がfalseを返すと即座に処理が終了し、falseを返す
 * someメソッド
 * ・述語関数がひとつでもtrueを返した場合にtrueを返す
 * ・述語関数がtrueを返すと即座に処理が終了し、trueを返す
 */
let arr5 = [2, 4, 6, 8, 10];
let allEven = arr5.every(x => x % 2 === 0);
console.log(allEven); // => true
let arr6 = [1, 3, 5, 6, 7];
let hasEven = arr6.some(x => x % 2 === 0);
console.log(hasEven); // => true

/**
 * reduceメソッド
 * ・コールバック関数の第一引数には簡約化処理の結果が入り、最終的にはこの結果が返る
 * ・初期値は、reduceメソッド自体の第二引数で指定するか、指定しなければ配列の先頭の要素が適用される
 * ・コールバック関数の第二引数以降は、これまでのメソッドと同じ
 * reduceRightメソッド
 * ・reduceメソッドの、インデックスが大きい方から計算されるバージョン
 */
let arr7 = [1, 2, 3, 4, 5];
let sum = arr7.reduce((acc, val) => acc + val, 0);
console.log(sum); // => 15
let max = arr7.reduce((a, b) => a > b ? a : b);
console.log(max); // => 5
let arr8 = [2, 3, 4];
let power = arr8.reduceRight((acc, val) => Math.pow(val, acc));
console.log(power); // => 2417851639229258349412352
