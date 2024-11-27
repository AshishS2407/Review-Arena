import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setAuthenticated, userType }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state (remove token or set isAuthenticated to false)
    setAuthenticated(false);  // Reset the auth state
    localStorage.removeItem("authToken");  // Remove token from localStorage (if used)
    navigate("/login");  // Redirect to the login page after logout
  };

  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold tracking-wide">Review Arena</h1>
        <div className="space-x-6">
          <Link to="/home" className="text-black font-medium hover:underline">Home</Link>
          <Link to="/about" className="text-black font-medium hover:underline">About Us</Link>
          <Link to="/contact" className="text-black font-medium hover:underline">Contact Us</Link>
          <Link to="/login" className="text-black font-medium hover:underline">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
