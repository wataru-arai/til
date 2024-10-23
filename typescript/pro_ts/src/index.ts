import { readFile } from "fs/promises"

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration)
  })
}

const p = readFile("foo.txt", "utf-8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result)
  }, () => {
    console.log("失敗しました")
  })