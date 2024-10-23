import result from "express"
import { readFile } from "fs/promises"

const repeat10 = (str: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(
      () => resolve(str.repeat(10)),
      1000
    )
  })
}

readFile('foo.txt', 'utf-8')
  .then((result) => repeat10(result))
  .then((result) => {
    console.log(result)
  })