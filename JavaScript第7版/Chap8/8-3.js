/**
 * パラメータ数が不足している場合
 * ・渡さない場合、デフォルト値を渡していなければundefinedが代入される
 * ・デフォルト値は呼び出された際に評価する
 */
function displayName(name1, name2, name3 = "default") {
  console.log(`name one: ${name1}`)
  console.log(`name two: ${name2}`)
  console.log(`name three: ${name3}`)
}
displayName("one")  
// => name one: one
//    name two: undefined
//    name three: default

/**
 * 可変長引数
 * ・可変長引数関数や可変アリティ関数、vararg関数などということがある（アリティは受け取る引数の数のこと）
 * ・残余パラメータは必ず配列
 * ・値がない場合はundefinedではなく空の配列
 * ・使用自体は非推奨だが、argumentsという名前でパラメータを全て受け取っている
 */
function max(first = -Infinity, ...rest) {
  console.log(arguments)  // => { '0': 1, '1': 45, '2': 2, '3': 67, '4': 100, '5': 33 }
  let maxValue = first
  for(const item of rest) {
    if(maxValue < item) maxValue = item
  }
  return maxValue
}
console.log(max(1, 45, 2, 67, 100, 33))  // => 100

/**
 * 引数の分割代入
 */
function addArrayVector([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2]
}
function addObjectVector({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return {x: x1 + x2, y: y1 + y2}
}
console.log(addArrayVector([1, 2], [3, 4]))               // => [ 4, 6 ]
console.log(addObjectVector({x: 1, y: 2}, {x: 3, y: 4}))  // => { x: 4, y: 6 }

/**
 * 名前付き引数伝搬
 * ・オブジェクトで渡して、分割代入する構文
 */
function displayPosition({pitcher="shigeno", catcher="sato", first="エルドレッド", second="araki", third="ohyama", others=[]}) {
  console.log("===== チーム ポジション一覧 =====");
  console.log(`投手 (Pitcher): ${pitcher}`);
  console.log(`捕手 (Catcher): ${catcher}`);
  console.log(`一塁手 (First): ${first}`);
  console.log(`二塁手 (Second): ${second}`);
  console.log(`三塁手 (Third): ${third}`);
  console.log(`それ以外はこちら: ${others.join(", ")}`)
  console.log("================================");
}
displayPosition({pitcher: "saitama", second: "kikuchi", third: "hashizume", others: ["itoi", "yo"]})
// => ===== チーム ポジション一覧 =====
//    投手 (Pitcher): saitama
//    捕手 (Catcher): sato
//    一塁手 (First): エルドレッド
//    二塁手 (Second): kikuchi
//    三塁手 (Third): hashizume
//    それ以外はこちら: itoi, yo
//    ================================