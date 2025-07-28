const obj = {
  x: undefined
}

/**
 * in演算子
 * ・プロパティを持つかどうかの判定をすることができる
 */
console.log("x" in obj)           // => true
console.log(obj.x !== undefined)  // => false
console.log("y" in obj)           // => false
console,log("toString" in obj)    // => true

/**
 * hasOwnProperty演算子
 * ・独自プロパティを持つかどうかの判定をすることができる
 */
console.log(obj.hasOwnProperty("x"))         // => true
console.log(obj.hasOwnProperty("toString"))  // => false

/**
 * propertyIsEnumerable演算子
 * ・enumerable属性がtrueの場合にのみtrueを返す
 */
console.log(obj.propertyIsEnumerable("x"))         // => true
console.log(obj.propertyIsEnumerable("toString"))  // => false