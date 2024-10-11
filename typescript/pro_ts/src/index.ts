function thrower():never {
  throw new Error("error!!!!!")
}

const result: never = thrower();

const str:string = result
console.log(result)