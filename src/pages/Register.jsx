import React from "react";

export default function Register() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Name" type="text" required />
        <input className="w-full p-2 border rounded" placeholder="Email" type="email" required />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" required />
        <button className="w-full bg-green-500 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}
