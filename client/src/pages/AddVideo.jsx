import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { createVideo } from "../services/videoService";
import toast from "react-hot-toast";


function AddVideo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    videoUrl: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  // Validation
  if (
    !formData.title ||
    !formData.description ||
    !formData.thumbnail ||
    !formData.videoUrl ||
    !formData.category
  ) {
    return setError("All fields are required");
  }

  try {

    await createVideo(formData);

    toast.success("Video added successfully");

    setFormData({
      title: "",
      description: "",
      thumbnail: "",
      videoUrl: "",
      category: "",
    });

  } catch (error) {

    toast.error(
  error.response?.data?.message ||
  "Failed to add video"
);
  }
};

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">

          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Add New Video
            </h1>

            {/* Error */}
            {error && (
              <div className="bg-red-100 text-red-600 px-4 py-3 rounded-lg mb-5">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Title */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Video Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter video title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  name="description"
                  placeholder="Enter video description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Thumbnail */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Thumbnail URL
                </label>

                <input
                  type="text"
                  name="thumbnail"
                  placeholder="Enter thumbnail image URL"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Video URL */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Video URL
                </label>

                <input
                  type="text"
                  name="videoUrl"
                  placeholder="Enter YouTube video URL"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>

                  <option value="Frontend">Frontend</option>

                  <option value="Backend">Backend</option>

                  <option value="Full Stack">Full Stack</option>

                  <option value="Database">Database</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Add Video
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;