/**
 * オブジェクトの拡張（コピー）
 */
const defaultObj = {
  x: 1,
  y: 2,
  z: 3,
}
const obj1 = {}
const obj2 = {
  x: 10,
  r: 20
}

const newObj1 = Object.assign(obj1, defaultObj)      // デフォルトで完全に上書き
const newObj2 = Object.assign({}, defaultObj, obj2)  // デフォルトを設定しつつ、上書きする

console.log(newObj1)  // => { x: 1, y: 2, z: 3 }
console.log(newObj2)  // => { x: 10, y: 2, z: 3, r: 20 }