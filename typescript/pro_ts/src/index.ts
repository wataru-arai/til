// 以下の世にタグ付きユニオンを宣言するのは間違ってない
type Optional<T> = Exist<T> | NotExist<T>

type Exist<T> = {
  tag: "exist",
  num: T
}

type NotExist<T> = {
  tag: "not-exist",
}

// タグ付きユニオンを使う時は以下のようなガード節をまず用いる ここが漏れてた
function showNumberIfExist(obj: Optional<number>) {
  if(isSome(obj)) {
    console.log(obj.num)
  }
}

// だいたいあっていた
// function isSome<T>(obj:Optional<T>): obj is Exist<T> {
//  return obj.tag === "exist"
// }

// Extractを使って以下のように書くこともできる（Type Existを宣言していない場合）
function isSome<T>(obj:Optional<T>): obj is Extract<Optional<T>, { tag: "exist" }> {
 return obj.tag === "exist"
}


// 以下のように型を使った宣言をして使う
const four:Optional<number> = {
  tag: "exist",
  num: 4
}

const nothing:Optional<number> = {
  tag: "not-exist",
}

showNumberIfExist(four);
showNumberIfExist(nothing)