console.log(`\  
  first line
  second line\
`) 
// テンプレートリテラルでは改行も検知できる（末尾に\をつけて改行を回避）
// => first line
//    second line

console.log('I can\'t insert new line.\\') // => I can't insert new line.\

/**
 * 文字列型のプロパティ（なんでもできる）
 * ・文字列内の検索
 * ・文字列の変換や加工
 * ・文字列の正規化（日本語のUnicodeを統一、住所のフォーマット統一 など）
 */
console.log("abcdefg"[1]) // => b
console.log(" 東京都渋谷区新宿町３ー14-9 渋谷新宿横断ビル10F".trim().normalize("NFKC").replace(/ー/g, "-"))  // => 東京都渋谷区新宿町3-14-9 渋谷新宿横断ビル10F

/**
 * タグ付きテンプレートリテラル
 * タグ関数をテンプレートリテラルに前から作用させることができる（String.rawはエスケープを回避させる）
 * タグ関数は独自に定義することも可能
 */ 
console.log(String.raw`\n`.length) // => 2 

/**
 * パターンマッチ
 * 正規表現を用いてパターンマッチの実装が可能
 * 後日フラグ
 */
