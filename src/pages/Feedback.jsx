import React from "react";

export default function Feedback() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Feedback</h2>
      <textarea className="w-full p-4 border rounded h-40" placeholder="Tell us how we did..."></textarea>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Submit Feedback</button>
    </div>
  );
}
