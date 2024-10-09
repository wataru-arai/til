type SignType = "plus" | "minus";

function signNumber(type: SignType) {
  return type === "plus" ? 1 : -1
}

function numberWithSign(num: number, type: SignType | "none") {
  // 型が絞り込まれてないとここで以下のようなsignNumberの呼び出しはできない
  // return num * signNumber(type)

  // 等価演算子を用いることで型を絞り込む
  if(type === "none") {
    return 0;
  } else {
    return num * signNumber(type)
  }
}

console.log(numberWithSign(5, "plus"))
console.log(numberWithSign(5, "minus"))
console.log(numberWithSign(5, "none"))