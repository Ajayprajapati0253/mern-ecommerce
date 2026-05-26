import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 px-4 py-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/videos"
          className="hover:bg-gray-700 px-4 py-3 rounded-lg transition"
        >
          All Videos
        </Link>

        <Link
          to="/add-video"
          className="hover:bg-gray-700 px-4 py-3 rounded-lg transition"
        >
          Add Video
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;