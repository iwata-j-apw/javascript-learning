/**
 * toStringメソッド：文字列を返す
 * ・
 */
// toStringメソッドの基本例
const obj = { x: 1, y: 2 };
console.log(obj.toString()); // [object Object]

// カスタムtoStringメソッドの定義
const point = {
  x: 10,
  y: 20,
  toString() {
    return `Point(${this.x}, ${this.y})`;
  }
};
console.log(point.toString()); // Point(10, 20)
console.log("座標: " + point); // 文字列結合時に自動的にtoString()が呼ばれる

// 配列のtoString
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3" 

/**
 * toLocaleStringメソッド：ローカライズされた文字列を返す
 * ・DateクラスとNumberクラスはカスタマイズされたメソッドを定義している
 */
const num = 1234567.89;
console.log(num.toLocaleString()); // => "1,234,567.89"
console.log(num.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})); // => "￥1,234,568"
const date = new Date('2024-01-15');
console.log(date.toLocaleString('ja-JP')); // => "2024/1/15 9:00:00" 

/**
 * valueOfメソッド：値を返す
 * ・Dateクラスに対して、数値型に変換する
 * ・評価式で用いられるメソッド
 */
const d1 = new Date('2024-01-01'), d2 = new Date('2024-01-15');
console.log(d1.valueOf()); // => 1704067200000
console.log(d2 - d1); // => 1209600000 (14日分のミリ秒)
console.log(d1 < d2); // => true

/**
 * toJSONメソッド：JSONへ変換する
 */
const dateObj = new Date('2024-01-15T10:30:00Z');
console.log(dateObj.toJSON()); // => "2024-01-15T10:30:00.000Z"
const custom = {id: 1, name: "太郎", toJSON() { return {id: this.id}; }};
console.log(JSON.stringify(custom)); // => '{"id":1}'