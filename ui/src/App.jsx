import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage/> } />
        <Route path="/admin-dashboard" element={<AdminDashboard/> } />
        <Route path="/about" element={<AboutUs/> } />
        <Route path="/contact" element={<ContactUs/> } />



      </Routes>
    </Router>
  );
};

export default App;
