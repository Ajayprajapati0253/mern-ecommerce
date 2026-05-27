import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginUser } from "../services/authService";

import toast from "react-hot-toast";

function Login() {

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    // Validation
    if (!formData.email || !formData.password) {

      return setError("All fields are required");
    }

    try {

      // API Call
      const data = await loginUser(formData);

      toast.success("Login successful");

      // Store Token
      localStorage.setItem("token", data.token);

      // Store User
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Redirect
      navigate("/dashboard");

    } catch (error) {

      toast.error(
  error.response?.data?.message ||
  "Login failed"
);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Video Learning Platform
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Login to your account
        </p>

        {/* Error Message */}
        {
          error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )
        }

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;