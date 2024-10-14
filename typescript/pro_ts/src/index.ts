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
  if(obj.tag === "exist") {
    console.log(obj.num)
  }
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