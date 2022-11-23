const { model } = require("mongoose");
const connectDataBase = require("./connectDB");

const mongoose = require("mongoose");
const { Schema } = mongoose;



const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  refrence: { type: Schema.Types.ObjectId, ref: "Cols" },
});

const Model = model("Blog", blogSchema);

module.exports = Model;
