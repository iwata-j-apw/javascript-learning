/**
 * クロージャ（入れ子型関数）
 * ・関数をクラスのように使用することができる
 * ・関数内部のローカル変数をプライベート変数のように扱うことができる
 * ・クロージャが定義されたときに有効なスコープチェーンを使って実行される
 */
let scope = "outer"
function checkScope() {
  let scope = "inner"
  function f() {
    return scope
  }
  return f
}
const s = checkScope()()
console.log(s)   // => inner（関数定義された際のスコープに沿った変数が格納されている）


function counter() {
  let n = 0;  // ローカル変数として保持される
  return {
    count: function() { return n++; },
    reset: function() { return n = 0; },
    get now() { return n }
  }
}
let c = counter()
let d = counter()
c.count()
console.log(c.now)  // => 1
console.log(d.now)  // => 0（それぞれ独立している）