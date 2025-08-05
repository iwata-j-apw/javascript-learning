/**
 * リテラル内の関数
 */
const obj = {
  double: function(x) { return x * 2 },
  square: function(x) { return x ** 2 },
}
console.log(obj.double(10))  // => 20
console.log(obj.square(10))  // => 100

const arr = [x => x ** 2, 10]
console.log(arr[0](arr[1]))  // => 100

// 次回、P.222~