import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import AppLayout from "../components/AppLayout";

import toast from "react-hot-toast";

import {
  getVideos,
  deleteVideo,
} from "../services/videoService";

function VideoList() {
  const [videos, setVideos] = useState([]);

  const [search, setSearch] = useState("");

  const fetchVideos = async () => {
    try {
      const data = await getVideos();

      setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isActive = true;

    getVideos()
      .then((data) => {
        if (isActive) {
          setVideos(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isActive = false;
    };
  }, []);

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

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            All Videos
          </h1>

          <input
            type="search"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500 md:max-w-sm"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video._id}
              className="min-w-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="aspect-video w-full object-cover"
              />

              <div className="flex h-full min-w-0 flex-col p-4 sm:p-5">
                <h2 className="mb-2 line-clamp-2 break-words text-lg font-bold text-gray-800 sm:text-xl">
                  {video.title}
                </h2>

                <p className="mb-3 line-clamp-3 break-words text-sm text-gray-600 sm:text-base">
                  {video.description}
                </p>

                <span className="mb-4 inline-flex w-fit max-w-full rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  <span className="truncate">
                    {video.category}
                  </span>
                </span>

                <div className="mt-auto grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                  <Link
                    to={`/edit-video/${video._id}`}
                    className="rounded-lg bg-green-500 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-green-600"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(video._id)}
                    className="rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="rounded-lg bg-white p-8 text-center text-gray-500 shadow-sm ring-1 ring-gray-200">
            No videos found.
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default VideoList;
