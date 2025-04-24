import React from "react";

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Email" type="email" required />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" required />
        <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        <p className="text-sm mt-2 text-blue-600 cursor-pointer">Forgot password?</p>
      </form>
    </div>
  );
}
