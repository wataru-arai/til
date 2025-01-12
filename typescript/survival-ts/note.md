# 学習ノート
## 2025/01/12
- コミットできてなかったけど https://typescriptbook.jp/reference/values-types-variables は読了
- 興味深かかった章
  - [ボックス化 (boxing) | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/boxing)
  - [TypeScriptと構造的型付け | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/structural-subtyping)
  - [型のメンタルモデル | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/mental-model-of-types)
- Typescriptのバージョンだけ5.6.3にしておいた

## 2025/01/08
- https://typescriptbook.jp/reference/values-types-variables/number まで読んだ
- 整数も小数もnumberになること、NaNが常にfalseになるのは初めて知ったかも

## 2024/12/26
- TypeScriptのあらまし、読了
- ChatGptにシングルスレッドなどについて教えてもらう
  - Goがバッチ処理に使われる印象があったけど並列処理に向いているからなのかなと思った
  - 公称型と構造的部分型 JavaやKotlinは同じ静的型付け言語という印象があったがこれらは公称型なので、TSとはまた違った書き味や実装になるかなとも思った
- 環境構築
  - `npm install -g typescript`が嫌だったので`npm init`して`npm install typescript`した
  - `tsc -v`ではなく`npm tsc -v`で動くようになる