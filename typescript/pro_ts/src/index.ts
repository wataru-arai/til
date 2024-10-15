// tsだけどimportする対象のファイルはjsになっている
// トランスパイル後のファイルを指定しないといけない
// バンドラを使っている場合はその限りではないのと、今後のアプデで解消される見込みらしい
import { uhyoName, age as uhyoAge } from "./uhyo.js"

console.log(`uhyoの名前は${uhyoName}で年齢は${uhyoAge}です`)