import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import toast from "react-hot-toast";

import {
  getVideos,
  deleteVideo,
} from "../services/videoService";

function VideoList() {

  const [videos, setVideos] = useState([]);

  const [search, setSearch] = useState("");


   useEffect(() => {

    fetchVideos();

  }, []);

  const fetchVideos = async () => {
  try {

    const data = await getVideos();

    setVideos(data);

  } catch (error) {

    console.log(error);
  }
};


  // Delete Function
 const handleDelete = async (id) => {
  try {

    await deleteVideo(id);
    toast.success("Video deleted successfully");
    fetchVideos();

  } catch (error) {

    console.log(error);
    toast.error("Failed to delete video");
  }
};

  // Search Filter
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <h1 className="text-3xl font-bold text-gray-800">
              All Videos
            </h1>

            {/* Search */}
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-80 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredVideos.map((video) => (
              <div
                key={video._id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >

                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-5">

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {video.title}
                  </h2>

                  <p className="text-gray-600 mb-3">
                    {video.description}
                  </p>

                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
                    {video.category}
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    {/* Edit */}
                    <Link
                      to={`/edit-video/${video._id}`}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg transition"
                    >
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(video._id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              No videos found.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default VideoList;