const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A List must have a name"],
    trim: true,
    maxlength: [30, "A list name must have less or equal then 30 characters"],
    minlength: [5, "A list name must have less or equal then 5 characters"],
    unique: false,
  },
  description: {
    type: String,
    trim: true,
    require: [true, "A list must have a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    // select: false,
  },
});
//                           name of data base
const List = mongoose.model("TO_DO_LIST", listSchema);
module.exports = List;
