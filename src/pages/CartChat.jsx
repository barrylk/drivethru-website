import React from "react";

export default function CartChat() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Chat with Rider</h2>
      <div className="h-64 bg-gray-100 rounded border p-4 mb-4 overflow-y-scroll">[Chat Interface Placeholder]</div>
      <textarea className="w-full p-2 border rounded" placeholder="Enter your order details or upload a photo..."></textarea>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Send to Rider</button>
    </div>
  );
}
