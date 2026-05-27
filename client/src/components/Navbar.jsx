import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        Video Learning
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;