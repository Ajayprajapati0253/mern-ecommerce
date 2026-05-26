const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");


// GET ALL VIDEOS
router.get("/", getAllVideos);


// GET SINGLE VIDEO
router.get("/:id", getSingleVideo);


// CREATE VIDEO (Protected)
router.post("/", verifyToken, createVideo);


// UPDATE VIDEO (Protected)
router.put("/:id", verifyToken, updateVideo);


// DELETE VIDEO (Protected)
router.delete("/:id", verifyToken, deleteVideo);


module.exports = router;