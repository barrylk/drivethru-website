import React from "react";
import { Link } from "react-router-dom";
import { FaMotorcycle, FaMapMarkerAlt, FaComments, FaBox } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to DriveThru</h1>
        <p className="text-lg mb-6">
          DriveThru is Sri Lanka's fastest growing delivery platform. Whether it's groceries, meals,
          or everyday items, we connect you with nearby riders who deliver straight to your door.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/20 p-4 rounded-2xl shadow-md">
            <FaMotorcycle size={30} className="mb-2" />
            <h2 className="text-xl font-semibold">Fast Delivery</h2>
            <p>Get your orders in minutes, not hours.</p>
          </div>

          <div className="bg-white/20 p-4 rounded-2xl shadow-md">
            <FaMapMarkerAlt size={30} className="mb-2" />
            <h2 className="text-xl font-semibold">Location Smart</h2>
            <p>Find riders near you with real-time GPS tracking.</p>
          </div>

          <div className="bg-white/20 p-4 rounded-2xl shadow-md">
            <FaComments size={30} className="mb-2" />
            <h2 className="text-xl font-semibold">Chat Support</h2>
            <p>Communicate directly with your assigned rider.</p>
          </div>

          <div className="bg-white/20 p-4 rounded-2xl shadow-md">
            <FaBox size={30} className="mb-2" />
            <h2 className="text-xl font-semibold">Anything Delivered</h2>
            <p>From food to electronics — we bring it all.</p>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/services" className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-purple-100">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
