import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({ Email, Password });
    setEmail("");
    setPassword("");
  };
  const [userData, setuserData] = useState({});
  return (
    <div className="p-7 font-uber-move-text h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
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
          <p className="text-center text-[#111] text-lg">
            New here?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 border w-full text-lg">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
