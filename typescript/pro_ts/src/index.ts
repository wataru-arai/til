import { readFile } from "fs/promises"

const p = readFile("piyo.txt", "utf-8")
p.then((result) => {
  console.log("成功", result)
  })
  .catch((error) => {
  console.log("失敗", error)
  })

