import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditVideo() {

  const { id } = useParams();

  const navigate = useNavigate();

  // Dummy Existing Data
  const [formData, setFormData] = useState({
    title: "React Tutorial",
    description: "Learn React basics",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    videoUrl: "https://youtube.com",
    category: "Frontend",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update Function
  const handleSubmit = (e) => {
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

    console.log("Updated Video:", formData);

    // Future API Update Here

    navigate("/videos");
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

            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Edit Video
            </h1>

            <p className="text-gray-500 mb-6">
              Editing Video ID: {id}
            </p>

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
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
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
                  <option value="Frontend">Frontend</option>

                  <option value="Backend">Backend</option>

                  <option value="Full Stack">Full Stack</option>

                  <option value="Database">Database</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Update Video
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideo;