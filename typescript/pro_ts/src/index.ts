const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

async function get3():Promise<number> {
  console.log("get3が呼び出されました") // 2
  await sleep(1000);
  console.log("awaitの次に進みました")  // 4
  return 3;
}

console.log("get3を呼び出します") // 1
const p = get3();
p.then((num) => { console.log(`num is ${num}`)})  // 5
console.log("get3を呼び出しました") // 3

// console.log("get3を呼び出します")
// console.log("get3が呼び出されました")
// console.log("get3を呼び出しました")
// console.log("awaitの次に進みました")
// console.log(`num is ${num}`)