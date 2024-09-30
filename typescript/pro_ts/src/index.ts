// 自分の回答
// アロー関数式による関数の作成
// const getFizzBuzzString = (i: number): string => {
//   if (i % 3 === 0 && i % 5 === 0) {
//     return "FizzBuzz"
//   } else if (i % 3 === 0) {
//     return "Fizz"
//   } else if (i % 5 === 0) {
//     return "Buzz"
//   } else {
//     return String(i)
//   }
// }

// 模範回答例
// 関数宣言による関数の作成
function getFizzBuzzString(i: number):string {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz"
  } else if (i % 3 === 0) {
    return "Fizz"
  } else if (i % 5 === 0) {
    return "Buzz"
  } else {
    return String(i)
  }
}

const sequence = (start: number, end: number):number[] => {
  const result: number[] = []; // ここに型注釈をつけてあげる
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message)
}