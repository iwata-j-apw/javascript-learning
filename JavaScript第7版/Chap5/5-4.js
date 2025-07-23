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


const sampleArray = [1, 2, 3, 4]
const sampleObject = {k: 1, e: 2, y: 3}
/**
 * for/of文
 */
for (const value of sampleArray) {
  console.log(value);  // => 1, 2, 3, 4
}

let sumKeys = ""
for (const key of Object.keys(sampleObject)) {
  sumKeys += key
}
console.log(sumKeys)  // => key

for (const value of Object.values(sampleObject)) {
  console.log(value);  // => 1, 2, 3
}

for (const [key, value] of Object.entries(sampleObject)) {
  console.log(`${key}: ${value}`);  // => k: 1, e: 2, y: 3
}

/**
 * for/in文
 * ・for文内の条式は、1回のループごとに評価される
 * ・想定外の挙動を起こす可能性があるため、できるだけfor/of文を使用する方が良いかもね
 */
for (const key in sampleObject) {
  console.log(key)
}
const arr = []
let i = 0
for(arr[i++] in sampleObject);
console.log(arr)  // => ["k", "e", "y"]
for(let j in sampleArray) console.log(j)  // => 0, 1, 2（配列もインデックス番号をキーとするオブジェクトであるため）

/**
 * Setクラス
 * ・集合を定義することのできるクラス
 */
const uniqueArray = [...new Set(array)];  // 集合化することで重複を削除することのできるライフハック

/**
 * 非同期のfor文
 */
async function* fetchData() {
  const data = [1, 2, 3, 4, 5];
  for (const num of data) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield num;
  }
}
async function process() {
  for await (const num of fetchData()) {
    console.log(num);  // => 1, 2, 3, 4, 5（1秒ごとに順番に出力）
  }
}