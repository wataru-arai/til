import { readFile } from "fs/promises";

readFile('foo.txt', "utf-8")
  .finally(() => {
    console.log("foo.txt is loaded?")
  })
  .catch(() => "")
  .then((result) => {
    console.log(result)
  })