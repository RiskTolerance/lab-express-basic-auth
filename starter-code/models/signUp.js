const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const signUp = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("signUp", signUp);
