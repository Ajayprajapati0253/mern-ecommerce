import axios from "axios";

// const API = "http://localhost:5000/api/videos";
const API = "https://video-learning-backend.onrender.com";


// Get Token
const getToken = () => {
  return localStorage.getItem("token");
};


// Auth Header
const config = () => {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
};


// GET ALL VIDEOS
export const getVideos = async () => {
  const response = await axios.get(API);

  return response.data;
};


// GET SINGLE VIDEO
export const getSingleVideo = async (id) => {
  const response = await axios.get(`${API}/${id}`);

  return response.data;
};


// CREATE VIDEO
export const createVideo = async (videoData) => {
  const response = await axios.post(
    API,
    videoData,
    config()
  );

  return response.data;
};


// UPDATE VIDEO
export const updateVideo = async (id, videoData) => {
  const response = await axios.put(
    `${API}/${id}`,
    videoData,
    config()
  );

  return response.data;
};


// DELETE VIDEO
export const deleteVideo = async (id) => {
  const response = await axios.delete(
    `${API}/${id}`,
    config()
  );

  return response.data;
};