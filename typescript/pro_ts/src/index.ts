function get<T, K extends keyof T & string>(obj: T, key: K): T[K] {
  const keyName: string = key
  return obj[key]
}

type Human = {
  name: string,
  age: number
}

const uhyo:Human = {
  name: "uhyo",
  age: 26
}

const uhyoName = get(uhyo, "name")
const uhyoAge = get(uhyo, "age")
const uhyoGender = get(uhyo, "gender")