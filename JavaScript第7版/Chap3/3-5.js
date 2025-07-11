/**
 * null
 * オブジェクトが存在しないことを表現するための特別なオブジェクト
 */
console.log(typeof null) // => object（クラスを継承しているわけではなく、ただのプリミティブ値）

/**
 * undefined
 * 未定義・存在していないものに対して定義されたグローバルな値
 * ・初期化されていない変数の値
 * ・そもそも存在しない値へのアクセス
 */
console.log(typeof undefined)  // => undefined（プリミティブ値）