/**
 * オブジェクトの簡略記法
 * ・プロパティ名と変数名が同じ場合に省略記法を使うことができる
 */
const name = "太郎", age = 30;
const samplePerson = { name, age }; // { name: name, age: age } と同じ
console.log(samplePerson); // => { name: '太郎', age: 30 }

/**
 * 算出プロパティ
 * ・キー名を動的に設定する
 * ・コンパイル時にキー名が決まっていないので、プロパティ名をプログラム中に記述することができない
 */
const prefix = "user";
const obj = { [`${prefix}_id`]: 123, [prefix + "_name"]: "花子" };
console.log(obj.user_id); // => 123
console.log(obj.user_name); // => "花子"

/**
 * Symbolでのプロパティ
 * ・名前の衝突を避けることができる（サードパーティ製のライブラリの拡張時は特に重要だったり）
 */
const sym = Symbol("id");
const user = { name: "次郎", [sym]: 12345 };
console.log(user[sym]); // => 12345
console.log(Object.keys(user)); // => ['name'] (Symbolは列挙されない)

/**
 * スプレッド演算子
 * ・展開するのは独自プロパティのみ
 * ・処理量のオーダーはO(n)なので、再帰構文内で使用すると時間食うから気をつけてね
 */
// 通常版
const obj1 = {a: 1, b: 2}, obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged); // => { a: 1, b: 3, c: 4 }
// Object.create版
const proto = {inherited: "継承"}, child = Object.create(proto);
child.own = "独自";
console.log({...child}); // => { own: '独自' } (継承プロパティは含まれない)

/**
 * メソッドの簡略記法
 * ・オブジェクト内のメソッド定義は、シンプルに書ける
 */
const calc = {
  add(a, b) { return a + b; }, // add: function(a, b) { return a + b; } と同じ
  multiply: (a, b) => a * b    // アロー関数も可
};
console.log(calc.add(2, 3)); // => 5
console.log(calc.multiply(2, 3)); // => 6

/**
 * ゲッターとセッター（アクセサプロパティ）
 * ・オブジェクトをあたかも簡易クラスのように使用することができる
 * ・読み書きのカスタマイズをすることが可能で、いくつでも定義することが可能
 * ・継承先オブジェクトでも使用することが可能
 */
const person = {
  firstName: 'Taro',
  lastName: 'Yamada',
  get fullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  },
  set fullName(name) {
    if (typeof name !== 'string' || !name.includes(' ')) {
      throw new Error('フルネームは「姓 名」の形式で入力してください');
    }
    [this.firstName, this.lastName] = name.split(' ');
  }
};
// 継承オブジェクトを作成
const employee = Object.create(person);
employee.fullName = 'Hanako Suzuki';
console.log(employee.fullName); // => "HANAKO SUZUKI"
console.log(employee.firstName); // => "Hanako"