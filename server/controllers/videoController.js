const Video = require("../models/Video");
const {
  isValidObjectId,
  isValidUrl,
  normalizeString,
} = require("../utils/validation");

const buildVideoPayload = (body) => ({
  title: normalizeString(body.title),
  description: normalizeString(body.description),
  thumbnail: normalizeString(body.thumbnail),
  videoUrl: normalizeString(body.videoUrl),
  category: normalizeString(body.category),
});

const validateVideoPayload = (payload) => {
  if (
    !payload.title ||
    !payload.description ||
    !payload.thumbnail ||
    !payload.videoUrl ||
    !payload.category
  ) {
    return "All fields are required";
  }

  if (!isValidUrl(payload.thumbnail)) {
    return "Please enter a valid thumbnail URL";
  }

  if (!isValidUrl(payload.videoUrl)) {
    return "Please enter a valid video URL";
  }

  return null;
};

const removeVersionKey = (document) => {
  if (!document) {
    return document;
  }

  const plainDocument = typeof document.toObject === "function"
    ? document.toObject()
    : document;

  const { __v, ...rest } = plainDocument;
  return rest;
};

const createVideo = async (req, res) => {
  try {
    const payload = buildVideoPayload(req.body);
    const validationError = validateVideoPayload(payload);

    if (validationError) {
      return res.status(400).json({
        message: validationError,
      });
    }

    const video = await Video.create({
      ...payload,
      user: req.user.id,
    });

    return res.status(201).json({
      message: "Video created successfully",
      video: removeVersionKey(video),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create video",
    });
  }
};

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .select("-__v")
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json(videos.map(removeVersionKey));
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch videos",
    });
  }
};

const getSingleVideo = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid video ID",
      });
    }

    const video = await Video.findById(req.params.id).select("-__v").lean();

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    return res.status(200).json(removeVersionKey(video));
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch video",
    });
  }
};

const updateVideo = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid video ID",
      });
    }

    const payload = buildVideoPayload(req.body);
    const validationError = validateVideoPayload(payload);

    if (validationError) {
      return res.status(400).json({
        message: validationError,
      });
    }

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      payload,
      {
        new: true,
        runValidators: true,
      }
    ).select("-__v");

    if (!updatedVideo) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    return res.status(200).json({
      message: "Video updated successfully",
      updatedVideo: removeVersionKey(updatedVideo),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update video",
    });
  }
};

const deleteVideo = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid video ID",
      });
    }

    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    return res.status(200).json({
      message: "Video deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete video",
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
