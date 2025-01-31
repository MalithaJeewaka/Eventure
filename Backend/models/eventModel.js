const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter your event name"],
    },
    slogan: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please enter a description about the event"],
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
    category: {
      type: String,
      required: true,
      enum: [
        "Concert",
        "Drama",
        "Conference",
        "Festival",
        "Sports",
        "Charity",
        "Seminar",
        "Stand up",
        "Fashion",
        "Other",
      ],
    },
  },
  {
    timestamps: true,
  }
);
