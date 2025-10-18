import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
        try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/",
        {
          email: email,
          password: password,
          name:fullName
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);

    } catch (error) {
      console.error("Status Code:", error.response.status);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full mb-4 p-2 border border-gray-300 rounded"
          required />

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded" required />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded" required />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default Signup;