import("fs/promises")
  .then(({readFile}) => {
    return readFile("foo.txt", "utf-8")
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log("エラーが発生しました！", error)
  })