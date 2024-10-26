const main = async() => {
  const { readFile, writeFile } = await import("fs/promises")
  try {
    const fooContent = await readFile("foo.txt", "utf-8")
    await writeFile("bar.txt", fooContent + fooContent)
    console.log("書き込み完了しました")
  } catch {
    console.log("失敗しました")
  }
}

main().then(() => {
  console.log("main()が完了しました")
})