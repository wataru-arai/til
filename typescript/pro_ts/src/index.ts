import { readFile } from "fs/promises";
import path from "path"
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, "../uhyo.txt")

async function load_data(path: string) {
  const data = await readFile(path, "utf-8")
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
  return count
}

load_data(dataFile).then((count) => { console.log(count) })


