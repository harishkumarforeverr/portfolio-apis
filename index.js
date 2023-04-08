const express = require('express')
const app = express()
const cors=require("cors")
const port = 9090
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports=app;