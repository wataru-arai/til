import { rejects } from "assert";
import { error } from "console";
import result from "express";
import { readFile } from "fs/promises";
import { resolve } from "path";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration)
  })
}

const p = Promise.race([
  readFile('foo.txt', "utf-8"),
  sleepReject(5000)
])

p.then((result) => {
  console.log('成功', result)
}, (error: unknown) => {
  console.log('失敗', error)
})