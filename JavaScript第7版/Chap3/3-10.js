/**
 * letとconst
 * ・constは、基本的に変化することのない値に対して使用するのがアンパイ（その場合は全て大文字のスネークケースが良い）
 */
let x = 2, y = x * x  // 複数同時定義

/**
 * varの挙動
 * ・関数内のどこで定義されても関数全体で使用でき、関数外で定義された場合はグローバルオブジェクトに格納される（globalThisで呼び出せる、関数スコープという）
 * ・↑は、varの持つ巻き上げ（ホスティング）の性質による
 */

/**
 * 分割代入
 */
function returnTuple() {
  return ["Junpei", "is", "my", "name"]
}
const [first, second, third, fourth] = returnTuple()  // 配列の分割代入
const [firstName, ...rest] = returnTuple();           // restで残りを全て受け取る
console.log(firstName, rest);                         // => Junpei [ 'is', 'my', 'name' ]

function returnObject() {
  return { name: "Junpei", age: 22}
}
const { name, age } = returnObject();                 // 名前そのまま分割代入 
const {
  name: superName,
  age: superAge
} = returnObject()                                    // 命名あり分割代入
console.log(superName, superAge)                      // => Junpei 22