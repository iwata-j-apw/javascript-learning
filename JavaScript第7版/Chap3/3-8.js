let sampleString = "sample"
sampleString.toUpperCase();
console.log(sampleString) // => sample（sampleString変数の中身自体は変更せず、メソッド作用による返り値を返すだけ）

/**
 * 基本型値とオブジェクトの取り扱い（＝比較は基本的には値でしか比較できない）
 * ・基本型値：値で比較する
 * ・オブジェクト：参照で比較する（参照型）
 */
const firstObj = { x: 23 }
const secondObj = { x: 23 }
const thirdObj = firstObj
console.log(firstObj === secondObj)  // => false
console.log(firstObj === thirdObj)   // => true
