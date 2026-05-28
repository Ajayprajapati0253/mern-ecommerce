import { useState } from "react";
import AppLayout from "../components/AppLayout";
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
    <AppLayout>
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Add New Video
        </h1>

        {error && (
          <div className="mb-5 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600 sm:text-base">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Video Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter video title"
              value={formData.title}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter video description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="min-h-32 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              placeholder="Enter thumbnail image URL"
              value={formData.thumbnail}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Video URL
            </label>

            <input
              type="text"
              name="videoUrl"
              placeholder="Enter YouTube video URL"
              value={formData.videoUrl}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Database">Database</option>
            </select>
          </div>

          <button
            type="submit"
            className="min-h-12 w-full rounded-lg bg-blue-600 px-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Add Video
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default AddVideo;
