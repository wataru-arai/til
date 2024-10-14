type Optional<T> = Exist<T> | NotExist<T>

type Exist<T> = {
  tag: "exist",
  num: T
}

type NotExist<T> = {
  tag: "not-exist",
}

const value:Optional<number> = { tag: "exist", num: 1 }

console.log(value.num)