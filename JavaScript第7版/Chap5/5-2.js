/**
 * 複合文
 * ・文ブロックをで記述することで、ひとつの文しか入れれない箇所にブロックで複数の文を差し込める
 * if文やfor文などの{}も同様の考え方
 */
{
  const pi = Math.PI
  const r = 10
  const area = pi * (r ** 2)
  console.log(area)
}

/**
 * 空文
 * 何もしない文
 */
a = [1, 2, 3]
for(let i = 0; i < a.length; a[i++] = 0);   // ++iだと結果変わるよ