const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your event name"],
  },
  slogan: {
    type: String,
  },
  venue: {
    type: String,
    required: [true, "Please enter event location"],
  },
  startTime: {
    type: String,
    required: [true, "Please enter event start time"],
  },
  duration: {
    type: String,
    required: [true, "Please enter event duration"],
  },
});
