// tsだけどimportする対象のファイルはjsになっている
// トランスパイル後のファイルを指定しないといけない
// バンドラを使っている場合はその限りではないのと、今後のアプデで解消される見込みらしい
import { getUhyoName } from "./uhyo.js"

console.log(`uhyoの名前は${getUhyoName()}です`)