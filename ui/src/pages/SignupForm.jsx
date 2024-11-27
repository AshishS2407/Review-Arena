import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      username,
      email,
      password,
      role,
    };

    try {
      const emailExists = await axios.get(`http://localhost:5000/users?email=${email}`);
      if (emailExists.data.length > 0) {
        setError("This email is already registered.");
        return;
      }

      const response = await axios.post("http://localhost:5000/users", newUser);
      console.log("User created:", response.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      setError("There was an error creating the user.");
      console.error(err);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex"
      style={{
        backgroundImage: 'url("https://i0.wp.com/wwcsff.com/wp-content/uploads/2019/05/film-background-1334067869u9d.jpg?ssl=1")',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

      {/* Left Side - Signup Form */}
      <div className="relative z-10 flex-1 flex justify-center items-center bg-black bg-opacity-50 p-6">
        <div
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border-t-4 border-b-4 border-dotted border-gray-700"
          style={{ borderImage: "url('https://www.pngarts.com/files/5/Filmstrip-PNG-Image-Transparent.png') 30 stretch" }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign Up
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Login here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Review Arena */}
<div className="relative z-10 flex-1 flex flex-col justify-center items-center bg-black bg-opacity-50 p-6">
  <div className="animate-fade-in text-center">
    {/* Popcorn Icon */}
    <div className="flex justify-center items-center mb-4">
      
    </div>
    
    {/* Title */}
    <h1
      className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg"
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      Review Arena
    </h1>
    
    {/* Tagline */}
    <p
      className="text-xl text-gray-300 mt-4 italic drop-shadow-md"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      "Lights, Camera, Reviews!"
    </p>
    
    {/* Star Ratings */}
    <div className="flex justify-center space-x-2 mt-6">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className="text-yellow-400 text-2xl hover:scale-125 transform transition duration-200 ease-in-out"
        >
          &#9733;
        </span>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default SignupForm;
