// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { start } = require("./src/database/index.js");
// const port = 9090;
// require("./src/database/index.js");
// app.use(cors());

// try {
//   var DBStart = start();
//   DBStart.then(async (e) => {
//     console.log(e);
//   }).catch(async (e) => {
//     console.log(e);
//   });
// } catch (error) {
//   console.error("Error in Connecting to MongoDb", error);
// }


// app.use('/api/view', require('./src/apis/router/portfolio.router.js'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// module.exports = app;


const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app