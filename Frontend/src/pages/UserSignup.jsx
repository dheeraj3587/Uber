import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/fonts.css';

const UserSignup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ FirstName, LastName, Email, Password });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  
  const [userData, setUserData] = useState({});
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-uber-move">
      <div className="max-w-md mx-auto">
        <img
          className="w-16 mx-auto mb-12 transform hover:scale-105 transition-transform duration-300"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler} className="backdrop-blur-sm bg-white/80 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
          <h3 className="text-[28px] font-bold mb-8 text-[#000000] tracking-tight">Create your account</h3>
          <div className="space-y-6">
            <div>
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">What's your name?</label>
              <div className="flex space-x-4">
                <input
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                  type="text"
                  placeholder="First name"
                />
                <input
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">Email address</label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">Password</label>
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-black text-white font-medium py-[14px] px-4 rounded-[8px] hover:bg-[#333333] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] backdrop-blur-sm">
              Sign up
            </button>
            <p className="text-center text-[#545454] text-[14px]">
              Already have an account?{" "}
              <Link to="/login" className="text-black hover:text-[#333333] font-semibold no-underline hover:underline transition-all duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </form>
        <Link
          to="/captain-signup"
          className="mt-6 block text-center py-[14px] px-4 rounded-[8px] backdrop-blur-sm bg-white/60 border border-white/40 text-black font-medium hover:bg-white/80 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          Sign up as Captain
        </Link>
        <p className="text-[12px] text-[#545454] text-center mt-6">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" className="text-black hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" className="text-black hover:underline">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;