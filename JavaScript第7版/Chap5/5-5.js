/**
 * ラベル文
 * ・ラベルはその文やブロックのスコープ内でのみ有効
 */
let count = 0
mainloop: while(count < 10) {
  count++
  continue mainloop
}

/**
 * break文
 * ・最も内側のループを終了させる
 */
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

/**
 * continue文
 * ・while系統は、ループ条件の判定に移る
 * ・for系統は、インクリメント処理と条件判定を先に行い、処理を継続する
 */
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);  // => 0, 1, 3, 4
}

/**
 * return文
 * ・返り値を指定しない場合は、undefinedが返る（void演算子参照）
 */
function calculateSum(a, b) {
  return a + b;
}

/**
 * throw文と例外処理（TypeScriptにおける型安全性についても考慮に入れて）
 * ・JavaScriptインタプリタが返すエラーは、Errorクラスのそのサブクラスが返される（nameプロパティとmessageプロパティを持つ）
 * ・throw new Errorでの型制限はない
 * ・識別子なしのcatch文で、エラーのスローを隠すことができる（代わりにundefinedを返すとか）
 */
function throwError(message) {
  throw new Error(message);  // 常にErrorインスタンスを投げる
}
try {
  throwError("Something went wrong");
} catch (error) {
  console.error(error.message);  // 型安全にアクセス
}
