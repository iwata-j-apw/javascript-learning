/**
 * プロパティアクセス式
 * ・式.識別子
 * ・式[式]
 * 
 */
const obj = { a: "a", b: { c: "c" } }
console.log(obj.a)          // => a
console.log(obj["b"]["c"])  // => c

/**
 * 条件付きプロパティアクセス（オプショナルチェイニング）
 * ・nullとundefinedはプロパティを持てないので、プロパティアクセスしようとするとTypeErrorが出る
 * → nullやundefinedに対するプロパティアクセスは、undefinedを即座に返すようにする
 */
const nullContent = { a: { b: null } }
console.log(nullContent.a.b.c)   // => TypeError: Cannot read properties of null (reading 'c')
console.log(nullContent.a.b?.c)  // => undefined