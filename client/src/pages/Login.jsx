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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      return setError("All fields are required");
    }

    try {
      const data = await loginUser(formData);

      toast.success("Login successful");

      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8 sm:px-6">
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg ring-1 ring-gray-200 sm:p-8">
        <h1 className="mb-2 text-center text-2xl font-bold text-blue-600 sm:text-3xl">
          Video Learning Platform
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500 sm:text-base">
          Login to your account
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 sm:text-base">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 text-base outline-none transition focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="min-h-12 w-full rounded-lg bg-blue-600 px-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 sm:text-base">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
