# 学習ノート
## 2024/10/09
- wideningは代入可能な値か、型注釈のない値で型推論するときに発生するようなイメージ
- 型の絞り込みのためのロジックを書いてしまうの、使いすぎると型による良さがなくなるような気がしないでもない
- TSではランタイムに型の情報を取得できない
  - Rubyで言うような`foo.class_name`のようなことができない
  - だからわざわざこんなことしてるんだなあ、と言う気持ちになった
- ランタイムの挙動が微妙なので、型をプログラミングすることで安全に使うような印象がある
- TSでできる代数的データ型はあくまで擬似的なもの
  - 文法・ランタイムのサポートが必要らしい
  - タグ付きリテラル型ってこんだけかいな、と言う気がしてしまう
- コンパイラオプションで色々制御できる印象
  - RuboCopみたいなものと考えておけば良いか？
- `switch`を使う時は`default`を宣言せずにコンパイルエラーになってくれた方が良さそう

## 2024/10/08
- 読んでいる雰囲気、Rubyだと正常な値を得るためにバリデーションロジックを書いているところを、TypeScriptだと型を使ってそれを行なっているようなイメージがある
- let宣言とオブジェクトのプロパティは書き換えができるのでwideningが発生する
  - オブジェクトのプロパティを書き換え不可にしたい場合
    - `readonly`属性をつける
    - `as const`を使う

## 2024/10/06
- `finally`で大域脱出に割り込む
- 関数宣言（e.g. `function foo(){}`）は巻き上げ（`hoisting`）が発生する アロー関数では起こらない
  - アロー関数で巻き上げが起こらないのはアロー関数の機能というより`const`による変数宣言によるものなので、関数式`e.g: const foo = function(){}`のときにも巻き上げは発生しない
- カプセル化の2つの方向性
  - クラスのプロパティとしてのカプセル化
  - 関数のクロージャとしてのカプセル化
  - 複数のメソッドが1つの構造体に対して生じる場合はクラスによるカプセル化の方が有用 そうでない時は関数のクロージャとしてカプセル化するという選択肢もある

## 2024/10/05
- TypeScriptで処理するエラーはランタイムエラー
  - コンパイル時に検知できないエラーを処理する必要がある
- `try~catch`を利用した例外処理は、共通した処理を行いたいときに便利
  - 大域脱出によりプログラムを中断できるため
  - たぶんアプリケーション全体で統一されたエラーの区分として処理したいときに使う
  - 逆にいうとそれ以外はわざわざ例外にせず、戻り値で例外を表現した方がいいかもしれない

## 2024/10/04
- `関数名()`と`関数名`の違い
  - `()`をつけることで関数が実行される
  - `()`をつけない場合、関数オブジェクト扱いになる
    - jsでは関数もオブジェクト
      - `apply`や`call`は関数オブジェクトのメソッド

## 2024/10/03
- `extends`には2種類ある
  - 型引数の制約
  - 継承
- TypeScriptにおいてはいくつかの世界があり、それぞれ独立しているようなイメージ
  - 「型」と「ランタイム」
    - 型定義はランタイムに影響を与えない
  - 「型」と「クラス・インスタンス」
    - 「クラス」による型を満たすからといって、そのクラスのインスタンスとは限らない
  - 独立しているので衝突するような名前付でも大丈夫だったりする