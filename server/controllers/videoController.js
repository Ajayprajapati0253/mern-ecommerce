const Video = require("../models/Video");


// CREATE VIDEO
const createVideo = async (req, res) => {
  try {

    const {
      title,
      description,
      thumbnail,
      videoUrl,
      category,
    } = req.body;

    // Validation
    if (
      !title ||
      !description ||
      !thumbnail ||
      !videoUrl ||
      !category
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Create Video
    const video = await Video.create({
      title,
      description,
      thumbnail,
      videoUrl,
      category,

      // Logged In User
      user: req.user.id,
    });

    res.status(201).json({
      message: "Video created successfully",
      video,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL VIDEOS
const getAllVideos = async (req, res) => {
  try {

    const videos = await Video.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(videos);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE VIDEO
const getSingleVideo = async (req, res) => {
  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.status(200).json(video);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE VIDEO
const updateVideo = async (req, res) => {
  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    // Update Video
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Video updated successfully",
      updatedVideo,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE VIDEO
const deleteVideo = async (req, res) => {
  try {

    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    await Video.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Video deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
};