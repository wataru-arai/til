const p = Promise.resolve(100);
const q = new Promise((resolve) => { resolve(100) })

p.then((result) => {
  console.log(`result is ${result}`)
})
q.then((result) => {
  console.log(`result is ${result}`)
})

