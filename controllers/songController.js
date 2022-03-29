const Song = require("../models/song");
const express = require("express");
const router = express();

//INDEX ROUTE
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.send({
      success: true,
      data: songs,
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
    const newSong = await Song.create(req.body);
    res.send({
      success: true,
      data: newSong,
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
    const song = await Song.findById(req.params.id);
    if (!item) {
      throw new Error("No Song Here!");
    }
    res.send({
      success: true,
      data: song,
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
    const song = await Song.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      data: song,
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
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({
      success: true,
      data: song,
    });
  } catch (err) {
    res.send({
      success: false,
      data: err.message,
    });
  }
});
module.exports = router;
