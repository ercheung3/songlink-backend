const Item = require("../models/item");
const express = require("express");
const router = express();

//INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.send({
      success: true,
      data: items,
    });
  } catch (err) {
    res.send({
      success: true,
      data: err.message,
    });
  }
});

//CREATE ROUTE
router.post("/", async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.send({
      success: true,
      data: newItem,
    });
  } catch (err) {
    res.send({
      success: false,
      data: err.message,
    });
  }
});

//SHOW ROUTE
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      throw new Error("No Item Here!");
    }
    res.send({
      success: true,
      data: item,
    });
  } catch (err) {
    res.send({
      success: false,
      //Use err.message to show text instead of empty array.
      data: err.message,
    });
  }
});

//DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      data: item,
    });
  } catch (err) {
    res.send({
      success: false,
      data: err.message,
    });
  }
});

//UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    //{new: true} is an option to return modified document rather than original
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({
      success: true,
      data: item,
    });
  } catch (err) {
    res.send({
      success: false,
      data: err.message,
    });
  }
});
module.exports = router;
