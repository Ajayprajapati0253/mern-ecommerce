const express = require("express");

const verifyToken = require("../middleware/authMiddleware");
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

const router = express.Router();

router
  .route("/")
  .get(getAllVideos)
  .post(verifyToken, createVideo);

router
  .route("/:id")
  .get(getSingleVideo)
  .put(verifyToken, updateVideo)
  .delete(verifyToken, deleteVideo);

module.exports = router;
