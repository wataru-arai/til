# 学習ノート
## 2025/01/19
- サバイバルTypeScriptを読む
  - ジェネリクスまで読んだ
## 2025/01/18
- サバイバルTypeScriptを読む
- 興味深かった章
  - [never型 | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/statements/never#never%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E7%B6%B2%E7%BE%85%E6%80%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF)
  - [制御フロー分析と型ガードによる型の絞り込み | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/statements/control-flow-analysis-and-type-guard)
  - [unknown型 | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/statements/unknown#unknown%E5%9E%8B%E3%82%92%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E5%9E%8B%E3%81%AB%E7%B5%9E%E3%82%8A%E8%BE%BC%E3%82%80)

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