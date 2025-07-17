/**
 * 三項演算子
 * ・1項目のオペランドの真偽値に応じて、2項目を処理するか3項目を処理するかを選択する
 */
const isLoggedIn = true;
const message = isLoggedIn ? "ようこそ！" : "ログインしてください";
console.log(message); // => "ようこそ！"

/**
 * ファーストディファインド演算子
 * ・定義されているかどうかで返り値を決定する
 * ・論理和演算子（||）との違いは、falsy判定か未定義判定（nullかundefined）という点で異なる
 */
const title = null;
const displayTitle = title ?? "デフォルトタイトル";
console.log(displayTitle); // => "デフォルトタイトル"
const count = 0;
console.log(count || 10); // => 10
console.log(count ?? 10); // => 0

/**
 * typeof演算子
 * ・オペランドのデータ型を返す
 * ・オペランドの値がnullの場合、"object"という文字列を返す点に注意（配列とオブジェクトと同じ返り値）
 */
console.log(typeof 42);           // => "number"
console.log(typeof "hello");      // => "string"
console.log(typeof null);         // => "object"
console.log(typeof []);           // => "object"
console.log(typeof undefined);    // => "undefined"

/**
 * delete演算子
 * ・配列やオブジェクトから、特定の要素を削除するという副作用をもつ演算子
 * ・配列の場合、削除した箇所にはundefinedが設定され、疎な配列になってしまう
 * ・再定義不可のプロパティは削除できない（Object.prototypeとか）
 * ・strictモードでは、オペランドとしてプロパティにアクセスした時だけに動作する
 */
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj);        // => { b: 2 }
const arr = [0, 1, 2];
delete arr[1];
console.log(arr);        // => [0, <1 empty item>, 2]
console.log(arr[1]);     // => undefined
console.log(arr.length); // => 3（長さは変わらない）
// strictモードでは削除できないパターンに注意
"use strict";
const fixed = Object.freeze({ foo: "bar" });
// delete fixed.foo; // => TypeError

/**
 * void演算子
 * ・どんな値でも返り値をundefinedにするような演算子
 * ・アロー関数の省略記法などで使用できる
 */
void console.log("これは実行されるが、返り値は無視される");
const doSomething = () => void fetch("/api/hit");     // fetchの返り値を使わない明示的意図

/**
 * カンマ演算子
 */
console.log(1 + 2, 3 + 4)  // => 7
console.log(i = 0, j = 1)  // => 1