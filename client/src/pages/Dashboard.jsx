import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-6">

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Dashboard
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Videos
              </h2>

              <p className="text-3xl font-bold text-blue-600 mt-4">
                12
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Categories
              </h2>

              <p className="text-3xl font-bold text-green-600 mt-4">
                5
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Users
              </h2>

              <p className="text-3xl font-bold text-purple-600 mt-4">
                20
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;