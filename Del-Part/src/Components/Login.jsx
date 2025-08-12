import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import back1 from "../assets/back1.jpg";

const mockApi = {
  login: (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.name && formData.phone_number) {
          resolve({ status: 200, message: "Login successful!" });
        } else {
          reject({ status: 400, message: "Missing form data." });
        }
      }, 1500);
    });
  },
};

const Login = () => {
  const navigate = useNavigate(); // ✅ react-router navigation
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await mockApi.login(formData);
      setMessage({ type: "success", text: "Login successful!" });

      // ✅ Navigate to OTP page after success
      navigate("/otp", { state: { phone: formData.phone_number } });

    } catch (error) {
      console.error("Login error:", error);
      setMessage({ type: "error", text: "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <form
        className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {message && (
          <div
            className={`mb-4 p-2 rounded text-center ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-900 hover:bg-yellow-800 text-white py-2 rounded-lg transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-yellow-800 hover:underline"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
