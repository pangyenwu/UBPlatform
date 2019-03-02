// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this will be our data base's data structure
const DataSchema = new Schema({
  title: String,
  price: String,
  course: String,
  url: String,
  owner: String
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
