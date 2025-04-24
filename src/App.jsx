import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RiderLogin from "./pages/RiderLogin";
import Services from "./pages/Services";
import Map from "./pages/Map";
import CartChat from "./pages/CartChat";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rider-login" element={<RiderLogin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cart-chat" element={<CartChat />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
