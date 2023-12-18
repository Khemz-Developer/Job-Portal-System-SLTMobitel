
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const login = (token) => {
    // Save the token to local storage or a secure storage mechanism
    localStorage.setItem('authToken', token);

    // Update the state to reflect that the user is logged in
    setIsLoggedIn(true);
    setAuthToken(token);
  };

  const logout = () => {
    // Remove the token from local storage or the storage mechanism used
    localStorage.removeItem('authToken');

    // Update the state to reflect that the user is logged out
    setIsLoggedIn(false);
    setAuthToken('');
  };

  const getToken = () => {
    return authToken;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
