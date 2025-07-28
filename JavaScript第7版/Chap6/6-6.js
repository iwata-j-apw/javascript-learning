/**
 * プロパティ調査
 * ・for/inやfor/ofループでは、enumerable属性がtrueのもののみ展開される（列挙可能）→ prototype属性や組み込みプロパティは展開されない
 * ・カスタムしたい場合の関数
 * 　・Object.keys：列挙可の独自プロパティのみ
 * 　・Obejct.getOwnPropertyNames：Object.keys＋列挙不可のプロパティ
 * 　・getOwnPropertySymbols：列挙可能かは関係なしに、キーがシンボルになっているもの全て
 * 　・Reflect.ownKeys：プロパティ全て
 */


/**
 * プロパティの列挙順序
 * 1. キーが非負の整数で小さい順
 * 2. それ以外の数値
 * 3. 文字列で追加された順
 * 4. シンボルのキーで追加された順
 */