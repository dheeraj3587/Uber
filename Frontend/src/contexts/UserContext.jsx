import React, { createContext, useState } from 'react'

export const UserDataContext = createContext({
  user: null,
  setUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {}
});

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;