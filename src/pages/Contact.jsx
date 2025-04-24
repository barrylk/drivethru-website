import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-300 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">We'd love to hear from you! Reach out via any of the methods below:</p>

        <div className="bg-white/20 p-6 rounded-2xl shadow">
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-3" />
            <span className="text-lg">nadeejaknirmala@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-3" />
            <span className="text-lg">+94 77 007 8086</span>
          </div>
        </div>
      </div>
    </div>
  );
}
