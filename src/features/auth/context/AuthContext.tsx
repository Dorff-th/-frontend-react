// src/features/auth/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  token: string | null;
   isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const loginFn = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const navigate = useNavigate();

  const logoutFn = () => {
    setToken(null);
    localStorage.removeItem('token');
    
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login: loginFn, logout: logoutFn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthContext not found!');
  return ctx;
};
