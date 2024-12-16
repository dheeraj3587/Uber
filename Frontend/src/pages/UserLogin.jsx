import React from "react";

const UserLogin = () => {
  return (
    <div className="p-7 font-uber-move-text">
      <form>
        <h3 className="text-2xl mb-2">What's your email</h3>
        <input
          required
          className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />
        <h3 className="text-2xl mb-2">Enter Password</h3>
        <input
          required
          className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
        />
        <button
          className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
