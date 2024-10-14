type Fruit = "apple" | "orange" | "strawberry"

type FruitNumbers = {
  [P in Fruit]: number
}

type FruitArray = {
  [P in Fruit]: P[]
}

// const numbers: FruitNumbers = {
//   apple: 3,
//   orange: 10,
//   strawberry: 20
// }


const numbers: FruitArray = {
  apple: ["apple", "apple"],
  orange: ["orange", "orange", "orange"],
  strawberry: []
}