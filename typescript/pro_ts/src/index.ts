type Uhyo = {
  name: "uhyo";
  age: number;
}

// 通常ならオブジェクトのプロパティはwideningされてname: stringとなり、Uhyo型のname: "uhyo"と合致しないのでコンパイルエラーになる
// しかし今回はすでにUhyo型であることを型注釈しており、値もname: "uhyo"になっているのでコンパイルエラーが出ない
// 試しに name: "foo"にすると、コンパイルエラーになる
const uhyo: Uhyo = {
  name: "uhyo",
  age: 26
}

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1
}

function useNumber(num: number) {
  return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

signNumber("uhyo")
useNumber("uhyo")