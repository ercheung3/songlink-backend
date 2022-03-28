const mongoose = require("mongoose");

// Connect to Mongo
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/item";
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("MongoDB connection established:", mongoURI)
);
// Configuration
const db = mongoose.connection;

// Connection Error/Success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
//db.on("connected", () => console.log("mongo connected: ", process.env.MONGO_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
