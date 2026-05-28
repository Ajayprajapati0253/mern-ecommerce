const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail URL is required"],
      trim: true,
      match: [/^https?:\/\/\S+$/i, "Please enter a valid thumbnail URL"],
    },
    videoUrl: {
      type: String,
      required: [true, "Video URL is required"],
      trim: true,
      match: [/^https?:\/\/\S+$/i, "Please enter a valid video URL"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      maxlength: [80, "Category cannot exceed 80 characters"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Video", videoSchema);
