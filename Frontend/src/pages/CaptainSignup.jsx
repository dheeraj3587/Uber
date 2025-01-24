import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext";
import axios from "axios";
import "../styles/fonts.css";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  
  // State Management
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    vehicle: {
      vehicleType: "car",
      color: "",
      plate: "",
      capacity: 1
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e, field, isVehicle = false) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      ...(isVehicle 
        ? { vehicle: { ...prev.vehicle, [field]: value } }
        : { [field]: value })
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const captainData = {
        fullname: {
          firstname: formData.firstName,
          lastname: formData.lastName
        },
        email: formData.email,
        password: formData.password,
        vehicle: formData.vehicle
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );

      if (response.status === 201) {
        const data=response.data;
        setCaptain(response.data.captain);
        localStorage.setItem('captain',data.token);
        navigate('/captain-home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      console.error('Signup error:', err);
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

        <form onSubmit={submitHandler} className="backdrop-blur-sm bg-white/80 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          <h3 className="text-[28px] font-bold mb-8 text-[#000000] tracking-tight">
            Create Captain account
          </h3>

          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
                What's your name?
              </label>
              <div className="flex space-x-4">
                <input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e, 'firstName')}
                  required
                  className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                  type="text"
                  placeholder="First name"
                />
                <input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e, 'lastName')}
                  required
                  className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
                Email address
              </label>
              <input
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')}
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
                value={formData.password}
                onChange={(e) => handleInputChange(e, 'password')}
                required
                type="password"
                className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
                placeholder="Enter your password"
              />
            </div>

            {/* Vehicle Information */}
            <div className="pt-4 border-t border-gray-200">
  <h4 className="text-[18px] font-semibold mb-4">Vehicle Details</h4>
  
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
        Vehicle Type
      </label>
      <select
        value={formData.vehicle.type}
        onChange={(e) => handleInputChange(e, 'type', true)}
        required
        className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px]"
      >
        <option value="car">Car</option>
        <option value="bike">Bike</option>
        <option value="auto">Auto</option>
      </select>
    </div>

    <div>
      <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
        Vehicle Color
      </label>
      <input
        value={formData.vehicle.color}
        onChange={(e) => handleInputChange(e, 'color', true)}
        required
        type="text"
        className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
        placeholder="e.g., Black, White"
      />
    </div>

    <div>
      <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
        License Plate
      </label>
      <input
        value={formData.vehicle.plate}
        onChange={(e) => handleInputChange(e, 'plate', true)}
        required
        type="text"
        className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
        placeholder="AB12CD3456"
      />
    </div>

    <div>
      <label className="text-[14px] font-semibold text-[#545454] mb-2 block">
        Capacity
      </label>
      <input
        value={formData.vehicle.capacity}
        onChange={(e) => handleInputChange(e, 'capacity', true)}
        required
        type="number"
        min="1"
        max="8"
        className="w-full px-4 py-[14px] rounded-[8px] bg-[#F6F6F6] border-2 border-transparent focus:border-black focus:bg-white outline-none transition-all duration-300 text-[16px] placeholder:text-[#A3A3A3]"
      />
    </div>
  </div>
</div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-black text-white font-medium py-[14px] px-4 rounded-[8px] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#333333]'}`}
            >
              {isLoading ? 'Creating account...' : 'Sign up as Captain'}
            </button>

            <p className="text-center text-[#545454] text-[14px]">
              Already have an account?{" "}
              <Link to="/captain-login" className="text-black hover:text-[#333333] font-semibold no-underline hover:underline transition-all duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </form>

        <Link
          to="/signup"
          className="mt-6 block text-center py-[14px] px-4 rounded-[8px] backdrop-blur-sm bg-white/60 border border-white/40 text-black font-medium hover:bg-white/80 transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          Sign up as User
        </Link>

        <p className="text-[12px] text-[#545454] text-center mt-6">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="text-black hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="text-black hover:underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;