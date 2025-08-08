/**
 * クラス・オブジェクト・クロージャによるモジュール
 */
const calc = (function() {
  function add(x, y) {
    return x + y
  }

  function minus(x, y) {
    return x - y  
  }

  return { add, minus }
}())  // 無名関数を即時実行し、メソッドをcalcモジュールにぶち込む