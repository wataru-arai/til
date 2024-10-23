import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration)
  })
};

const p = Promise.any([
  readFile('foo.txt', "utf-8"),
  sleepReject(5000)
])

p.then((result) => {
  console.log(result)
})