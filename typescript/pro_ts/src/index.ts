import express from "express"

const app = express()

app.get('/', (req, reply) => {
  res.send("Hello, World!");
})

app.listen(8080)