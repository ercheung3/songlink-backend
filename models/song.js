const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: String,
    artist: String,
    albumTitle: String,
    albumArt: String,
    genre: String,
    media: String,
    //Add users
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
