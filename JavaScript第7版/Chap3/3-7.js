/**
 * グローバルオブジェクト：JavaScriptインタープリタが起動した際に生成される、グローバルに定義されたオブジェクト
 * 
 * 格納場所（globalThisは環境に依存しない指定の仕方なので便利）
 * Node：global
 * WEBブラウザ：window
 * WebのWorkerスレッド：self
 * ES2020：globalThis
 */
console.log(global)