const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration)
  })
}

sleepReject(3000).then(() => { console.log('成功！') }).catch(() => {
  console.log('失敗！')
})