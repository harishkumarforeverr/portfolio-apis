const express = require("express");
// const app = express();
const cors = require("cors");
// const { start } = require("./src/database/index.js");

const mongoose = require("mongoose");

const app = express();
const PORT = 4000;
const autopopulate = require("mongoose-autopopulate");
const Schema = mongoose.Schema;

const viewsSchema = new Schema(
  {
    count: { type: Number, default: 0, require: true },
  },
  { versionKey: false, timestamps: true, collection: "views" }
);

viewsSchema.plugin(autopopulate);
var viewModel = mongoose.model("views", viewsSchema);

const baseUrl =
  "mongodb+srv://harish:Harish@cluster0.izuu3.mongodb.net/portfolio";

// const mongoose = require("mongoose");
const start = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      mongoose.Promise = global.Promise;
      await mongoose.connect(baseUrl, {
        useNewUrlParser: true,
      });
      resolve("Connected to MongoDb");
    } catch (err) {
      reject("Error in Connecting to MongoDb", err);
    }
  });
};
// const port = 9090;
// require("./src/database/index.js");
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

// app.use('/api/view', require('./src/apis/router/portfolio.router.js'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
// module.exports = app;
 


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", async (req, res) => {
  try {
    const _id = "64318f34833a6143cf3032fe";
    const data = await viewModel.findOneAndUpdate(
      { _id },
      { $inc: { count: 1 } },
      { new: true }
    );
    return res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    return res.json({ status: 500, message: "internal server" });
  }
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;
