/**
 * 条件分岐
 */
let i =  j = 1
let k = 2
if(i === j) console.log("i = j")
  if(i === k) console.log("i = k")
else console.log("なんか数値違うんだよなぁ")   // このelseは直前のifに対するものなので、インデント通りの挙動をしないので、敢えてブロックを使用するのもアリ

/**
 * switch文
 * ・一致するかどうかの判定は、===演算子で行う
 * ・defaultはどのケースにもマッチしなかった時に実行される
 */
const fruit = "orange";
switch (fruit) {
  case "apple":
    console.log("リンゴです");
    break;  // 関数でラップして、returnしても良い
  default:
    console.log("その他の果物です");
  case "orange":
    console.log("みかんです");
    break;
}
// => みかんです