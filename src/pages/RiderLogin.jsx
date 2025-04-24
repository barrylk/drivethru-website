import React from "react";

export default function RiderLogin() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rider Login</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Rider ID" type="text" required />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" required />
        <button className="w-full bg-purple-500 text-white py-2 rounded">Login as Rider</button>
      </form>
    </div>
  );
}
