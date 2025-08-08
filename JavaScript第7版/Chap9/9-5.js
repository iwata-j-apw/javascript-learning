/**
 * プロトタイプチェーンを用いたサブクラス
 */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
}

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
}
const dog1 = new Dog("Pochi");
dog1.speak(); // => Pochi barks.

/**
 * extendsとsuperによるサブクラス化
 * ・抽象クラスという共通の実装を保持するクラスと、それを継承or合成する具象クラスに大きく分かれる
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog2 = new Dog("Pochi");
dog2.speak(); // => Pochi barks.

/**
 * クラスの委譲
 * ・スーパークラス側のインスタンスをクラス内で作成し、必要に応じてインスタンスに振る舞いを委譲する（任せる的なニュアンス）
 * 　つまり、スーパークラスを継承するのではなく、ラップするようなクラスを定義することを優先するべき
 * ・基本的には継承よりも委譲（合成）を優先する
 */
class Engine {
  start() {
    console.log("Engine started.");
  }
}
class Car {
  constructor() {
    this.engine = new Engine();  // ここが肝
  }
  drive() {
    this.engine.start();         // 委譲している
    console.log("Car is moving.");
  }
}

const car = new Car();
car.drive();   // => Engine started.  Car is moving.