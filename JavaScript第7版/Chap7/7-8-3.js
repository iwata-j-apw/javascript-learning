/**
 * concatメソッド
 * ・引数で渡された要素を配列に追加する
 * ・新しい配列を作成して返す
 * ・配列1階層分であれば、展開して配列に要素を追加する
 */
let arr1 = [1, 2, 3];
console.log(arr1.concat(4, 5));         // => [ 1, 2, 3, 4, 5 ]
console.log(arr1.concat([4, 5]));       // => [ 1, 2, 3, 4, 5 ]
console.log(arr1.concat([4, [5, 6]]));  // => [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr1.concat(4, [5, 6], 7)); // => [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr1);                      // => [ 1, 2, 3 ]