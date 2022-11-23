const express = require("express");
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const connectDB = require("./connectDB");
const app = express();
const Model = require("./Model");
connectDB();

const ColsSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
});
const Cols = mongoose.model("Cols", ColsSchema);

(async () => {
    const   res = await Cols.find({});
  console.log(res);
  
  const h = await Model.create({
      title: "Hey there",
      author: "Hamza shaikh",
      body: "Hamza shaikh",
      refrence: res[0]._id,
    });
})();

// app.get("/", (req, res) => {
//   res.send("Hey");
// });

app.listen(3000, () => {
  console.log("Running");
});
