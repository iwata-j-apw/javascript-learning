/**
 * インデックスアクセス
 * ・内部的には、インデックスアクセスの際にインデックス番号を文字列として処理する（オブジェクトではあるので）
 * ・存在しないプロパティへのアクセスはundefinedが返されるだけ
 */
const obj = [1, 2]
obj["1"] = "test"
console.log(obj)        // => [ 1, "test" ]
obj[1.00] = "testtest"
console.log(obj)        // => [ 1, "testtest" ]