import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import "../styles/fonts.css";
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        email,
        password
      });
      
      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem('token',response.data.token);
        navigate('/home');
      } 
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-uber-move">
      <div className="max-w-md mx-auto">
        <img
          className="w-16 mx-auto mb-8 transform hover:scale-105 transition-transform duration-300"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form 
          onSubmit={submitHandler} 
          className="backdrop-blur-sm bg-white/80 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40"
        >
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          <h3 className="text-[28px] font-bold mb-8 text-[#000000] tracking-tight">
            Sign in to ride
          </h3>
          <div className="space-y-6">
            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                placeholder="name@example.com"
              />
            </div>

            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white font-medium py-[14px] px-4 rounded-[8px] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#333333]'}`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>

            <p className="text-center text-[#545454] text-[14px]">
              New to Uber?{" "}
              <Link to="/signup" className="text-black hover:text-[#333333] font-semibold no-underline hover:underline transition-all duration-200">
                Create an account
              </Link>
            </p>
          </div>
        </form>

        <Link
          to="/captain-login"
          className="mt-6 block text-center py-[14px] px-4 rounded-[8px] backdrop-blur-sm bg-white/60 border border-white/40 text-black font-medium hover:bg-white/80 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          Sign in as Captain
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
};

export default UserLogin;