/**
 * 条件付き呼び出し
 * 関数が定義されていない場合に、TypeErrorを投げるのではなく呼び出しをやめる
 */
const log = () => {
  console.log('test')
}
function exec(log) {
  log?.();
}

exec()    // log関数の呼び出しがキャンセルされる
exec(log) // => test
