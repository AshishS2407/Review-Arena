import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        alert("Login successful!");

        if (user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/home");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("There was an error logging in.");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://i0.wp.com/wwcsff.com/wp-content/uploads/2019/05/film-background-1334067869u9d.jpg?ssl=1")' }}>
      {/* Left Side - Login Form */}
      <div className="flex-1 flex justify-center items-center bg-black bg-opacity-70 p-6">
        <div className="w-full max-w-md bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-2xl">
          <h2
            className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Log In
            </button>

            <div className="mt-4 text-center text-sm text-gray-400">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/")}
                  className="text-yellow-400 cursor-pointer hover:underline"
                >
                  Sign Up here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Review Arena */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center bg-black bg-opacity-70 p-6">
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

export default LoginPage;

