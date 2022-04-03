const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    albumTitle: String,
    albumArt: String,
    genre: String,
    media: String,
    isPlayable: { type: Boolean, default: false },
    preview: String,
    //Add users
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
