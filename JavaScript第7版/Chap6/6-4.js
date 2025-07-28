/**
 * プロパティの削除
 * ・独自プロパティは削除可能
 * ・継承プロパティは継承元で消すことによって可能
 * ・一部の組み込みプロパティなどのような、configurable属性がfalseのプロパティは消せない
 */
const obj = {
  x: 1,
  y: 2,
}
var x = 1 

delete obj.y             // => true
delete obj.z             // => true（何もしない）
delete Object.prototype  // => false
delete globalThis.x      // => true
