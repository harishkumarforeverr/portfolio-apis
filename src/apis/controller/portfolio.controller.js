const express = require("express");
const ObjectId = require('mongodb').ObjectID;
const router = express.Router();

const portfolio = require("../model/portfolio.model");

router.get("/", async (req, res) => {
  try { 
    const _id="64318f34833a6143cf3032fe";
    const data = await portfolio.findOneAndUpdate(
      { _id },
      { $inc: { count: 1 } },
      { new: true }
    );
    return res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    return res.json({ status: 500, message: "internal server" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await portfolio.insertMany({ count: 0 });
    return res.json({ status: 404, message: "Success", data });
  } catch (error) {
    return res.json({ status: 500, message: "internal server" });
  }
});

module.exports = router;
