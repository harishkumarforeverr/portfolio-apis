const express = require("express");
const app = express();
const cors = require("cors");
const { start } = require("./src/database/index.js");
const port = 9090;
require("./src/database/index.js");
app.use(cors());

try {
  var DBStart = start();
  DBStart.then(async (e) => {
    console.log(e);
  }).catch(async (e) => {
    console.log(e);
  });
} catch (error) {
  console.error("Error in Connecting to MongoDb", error);
}


app.use('/api/view', require('./src/apis/router/portfolio.router.js'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app;
