import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [, setCaptain] = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/captain-home');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);
  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if(response==200){
      setCaptain(response.data.captain);
      setIsLoading(false);
    }
  })
    .catch((error) => {
      console.error(error);
      navigate('/captain-login');
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;