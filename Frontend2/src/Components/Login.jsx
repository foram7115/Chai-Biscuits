import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./Login.css";

// Import your image from assets
import back1 from "../assets/back1.jpg"; // adjust the path if needed

const Page = {
  LOGIN: "login",
  REGISTER: "register",
};

const mockApi = {
  // A promise-based function to simulate an API call
  login: (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.name && formData.phone_number) {
          resolve({ status: 200, message: "Login successful!" });
        } else {
          reject({ status: 400, message: "Missing form data." });
        }
      }, 1500); // Simulate a network delay
    });
  },
};

const Login = ({ navigate }) => {
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
    } catch (error) {
      console.error("Login error:", error);
      setMessage({ type: "error", text: "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {message && (
          <div className={`message-box ${message.type}`}>{message.text}</div>
        )}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

const Register = ({ navigate }) => {
  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${back1})` }}
    >
      <div className="register-form">
        <h2>Register Page</h2>
        <p>This is a mock register page.</p>
        <button onClick={() => navigate(Page.LOGIN)}>Go to Login</button>
      </div>
    </div>
  );
};

// Main App component to handle page switching
const App = () => {
  const [currentPage, setCurrentPage] = useState(Page.LOGIN);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  switch (currentPage) {
    case Page.REGISTER:
      return <Register navigate={navigate} />;
    case Page.LOGIN:
    default:
      return <Login navigate={navigate} />;
  }
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default Login;
