import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            aria-label="Open sidebar"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
            onClick={onMenuClick}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
            </span>
          </button>

          <Link
            to="/dashboard"
            className="truncate text-lg font-bold text-blue-600 sm:text-xl lg:text-2xl"
          >
            Video Learning
          </Link>
        </div>

        <nav className="hidden items-center gap-3 lg:flex">
          <Link
            to="/dashboard"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/videos"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Videos
          </Link>

          <Link
            to="/add-video"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Add Video
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </nav>

        <button
          type="button"
          aria-label="Toggle account menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-xl leading-none">...</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-2 border-t border-gray-100 px-4 pb-4 sm:px-6 lg:hidden">
          <Link
            to="/dashboard"
            className="rounded-lg px-3 py-2 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/videos"
            className="rounded-lg px-3 py-2 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Videos
          </Link>

          <Link
            to="/add-video"
            className="rounded-lg px-3 py-2 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Add Video
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-left font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
