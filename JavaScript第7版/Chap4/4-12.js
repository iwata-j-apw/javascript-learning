/**
 * eval：ソースコード文字列を解釈し、実行することができる
 * ・セキュアに処理することができない場合があるため、使用は推奨できない
 * ・Content-Security-PolicyというHTTPヘッダーを使って、WEBサイト全体で無効にしているケースもある
 * ・ローカルevalとグローバルeval（後日フラグ）
 */
eval("console.log(1 + 2)");   // => 3
eval("const evalValue = 1");  // => ローカル変数を定義できる