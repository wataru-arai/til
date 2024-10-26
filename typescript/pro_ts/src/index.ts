import { readFile } from "fs/promises";
import path from "path"
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, "../uhyo.txt")

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