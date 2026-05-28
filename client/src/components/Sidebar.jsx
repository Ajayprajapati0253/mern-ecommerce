import { Link } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/videos", label: "All Videos" },
  { to: "/add-video", label: "Add Video" },
];

function SidebarContent({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onNavigate}
          className="rounded-lg px-4 py-3 text-sm font-medium text-gray-100 transition hover:bg-gray-700 hover:text-white sm:text-base"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function Sidebar({ isOpen = false, onClose }) {
  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto bg-gray-900 p-5 text-white md:block lg:w-72">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold sm:text-2xl">
            Dashboard
          </h2>
        </div>

        <SidebarContent />
      </aside>

      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className={`absolute inset-0 bg-gray-950/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`relative h-full w-[min(82vw,20rem)] overflow-y-auto bg-gray-900 p-5 text-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold">
              Dashboard
            </h2>

            <button
              type="button"
              aria-label="Close sidebar"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-gray-700"
            >
              x
            </button>
          </div>

          <SidebarContent onNavigate={onClose} />
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
