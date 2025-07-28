/**
 * 初期化方法１
 * ・実行されるたびにオブジェクトの初期化を行う（何度も実行される関数などの中で使用すると、大量のオブジェクトを作成してしまう可能性があるので注意）
 * ・プロパティとして、prototypeも持つ
 */
const obj = {
  x: 1,
  y: x + 1  // JS式を入れることも可能
}
const obj2 = new Object()

/**
 * プロトタイプ
 * ・Object.prototypeは何も継承していない、稀なプロトタイプを持つ
 * ・Array.prototypeなどのプロトタイプは、Object.prototypeを継承している
 * プロトタイプチェーン
 */

/**
 * 初期化方法２
 * ・()内の内容を継承したオブジェクトを生成する
 */
const obj3 = Object.create({
  x: 1,
  y: x + 1
})
const obj4 = Object.create(null)              // 何も継承せずに、完全に空のオブジェクトを生成
const obj5 = Object.create(Object.prototype)  // プロトタイプのみを継承する（ {}やnew Object()での初期化と同じ ）