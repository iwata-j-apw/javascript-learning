/**
 * flatメソッド
 * ・配列の各要素を展開する
 * ・引数なしで実行すると、1階層分だけ展開する
 * ・新しい配列を作成してメソッドの返り値として返す
 */
let nested = [1, [2, 3], 4, [5, 6]];
console.log(nested.flat()); // => [ 1, 2, 3, 4, 5, 6 ]
let deep = [1, [2, [3, [4]]]];
console.log(deep.flat()); // => [ 1, 2, [ 3, [ 4 ] ] ]
console.log(deep.flat(2)); // => [ 1, 2, 3, [ 4 ] ]
console.log(deep.flat(Infinity)); // => [ 1, 2, 3, 4 ]

/**
 * flatMapメソッド
 * ・mapとflatを合わせたような挙動をする（.map().flat()と同じ）
 * ・マッピングしてから展開する
 */
let arr = [1, 2, 3, 4];
console.log(arr.flatMap(x => [x, x * 2]));         // => [ 1, 2, 2, 4, 3, 6, 4, 8 ]
let sentences = ["Hello world", "How are you"];
console.log(sentences.flatMap(s => s.split(" "))); // => [ 'Hello', 'world', 'How', 'are', 'you' ]
