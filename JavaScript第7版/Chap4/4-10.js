/**
 * 論理演算子
 * ・論理積演算子（truthyなら2つ目を返し、falsyなら1つ目を返し処理を終了する）
 * ・論理和演算子（論理積演算子のtrueとfalseを入れ替えたもの）
 * ・論理否定演算子（真偽値に変換してから、反転させる）
 */
console.log("Hello" && "World");  // => World
console.log(null && "fail");      // => null
console.log(0 || "default");      // => "default"
console.log("user" || "default"); // => "user"
