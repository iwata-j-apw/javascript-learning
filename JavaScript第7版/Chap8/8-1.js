/**
 * 関数宣言文
 * ・関数自信を値として持つ変数の名前になる → JSインタプリタは関数定義を行う
 * ・関数の先頭への巻き上げ（ホイスティング）
 * ・return文のない関数の戻り値はundefined
 */
function distance(x, y) {
  return ( x ** 2 + y ** 2 ) ** 0.5
}

/**
 * 関数定義式
 * ・代入の操作が発生するまで関数オブジェクトが初期化されない
 */
const square = function(x) {
  return x * x
}

/**
 * アロー関数
 * ・値を返すだけの関数の場合は省略記法がある
 * ・定義環境のthisキーワードを引き継ぐ
 * ・prototypeプロパティを持たない → 新しいクラス用のコンストラクタ関数としては使用できない
 */
const sum = (x, y) => {
  console.log(x + y)
  return x + y
}
const greet = name => `Hello, ${name}`