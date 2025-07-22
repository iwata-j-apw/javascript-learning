/**
 * 繰り返し処理
 */
let count = 0

/**
 * while文
 */
while(count < 10){
  console.log("while:", count);
  count++;
}

/**
 * do/while文
 * ・最低でも一回は処理が走る
 */
do {
  console.log("do/while:", count);
  count++;
} while(count < 20);

/**
 * for文
 */
for(count = 20; count < 30; count++) {
  console.log("for:", count);
}
function getArrayTail(o) {  // こりゃすげぇと関心した
  for(;o.next; o = o.next)
  return o
}

/**
 * for/of文
 */

/**
 * for/in文
 */