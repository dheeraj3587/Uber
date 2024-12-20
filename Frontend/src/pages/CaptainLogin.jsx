import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({ Email, Password });
    setEmail("");
    setPassword("");
  };
  const [captainData, setcaptainData] = useState({});
  return (
    <div className="p-7 font-uber-move-text h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg">
            Login
          </button>
          <p className="text-center text-[#111] text-lg inline-block">
            Want to join as a Captain?{" "}
            <Link to="/captain-signup" className="text-blue-600 inline-block">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 border w-full text-lg">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
