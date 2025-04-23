import React, { createContext, useState } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, name: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Replace with real auth logic
    setUser({ email, name: "User" });
    localStorage.setItem('user', JSON.stringify({ email, name: "User" }));
  };

  const register = (email: string, name: string, password: string) => {
    setUser({ email, name });
    localStorage.setItem('user', JSON.stringify({ email, name }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};