import AppLayout from "../components/AppLayout";

function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Overview
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
            Welcome to Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
            <h2 className="text-base font-semibold text-gray-700 sm:text-lg">
              Total Videos
            </h2>

            <p className="mt-4 text-3xl font-bold text-blue-600 sm:text-4xl">
              12
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
            <h2 className="text-base font-semibold text-gray-700 sm:text-lg">
              Categories
            </h2>

            <p className="mt-4 text-3xl font-bold text-green-600 sm:text-4xl">
              5
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:col-span-2 sm:p-6 lg:col-span-1">
            <h2 className="text-base font-semibold text-gray-700 sm:text-lg">
              Users
            </h2>

            <p className="mt-4 text-3xl font-bold text-purple-600 sm:text-4xl">
              20
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
