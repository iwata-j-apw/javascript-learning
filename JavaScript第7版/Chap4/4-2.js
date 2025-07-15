/**
 * 居場所は確保されているが、要素は無い的なニュアンス
 */
const sparse = [1, , 3];
console.log(sparse.length)  // => 3
console.log(sparse[1])      // => undefined