import path from "path"
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, "../uhyo.txt")

sleep(1).then(() => {
  process.exit();
})

// top-level awaitが可能なので以下のように書ける
const data = await readFile(dataFile, { encoding: "utf-8" })

let count = 0
let currentIndex = 0

while(true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++
    currentIndex = nextIndex + 1
  } else {
    break
  }
}

console.log(count)