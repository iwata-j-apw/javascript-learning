/**
 * オブジェクトのシリアライズ（直列化）
 * ・JSON.stringify()
 * ・JSON.parse()
 * 　・NaNやinfinityなどはnullにシリアライズされてしまう
 * 　・DateオブジェクトはISO形式に変換して文字列化（Date.toJSON()）
 * 　・Function, RegExp, Errorオブジェクトなどはシリアライズも復元もできない
 */
const user = {
  name: "田中太郎",
  age: 30,
  isActive: true,
  address: {
    city: "東京",
    zipCode: "100-0001"
  }
};
const jsonString = JSON.stringify(user);
const parsedUser = JSON.parse(jsonString);
console.log("JSON文字列:", jsonString);
console.log("復元されたオブジェクト:", parsedUser);
