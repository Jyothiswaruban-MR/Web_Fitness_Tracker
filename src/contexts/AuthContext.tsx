import React, { createContext, useEffect, useState } from 'react';

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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage if already logged in before
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // Register adds user to the "users" list (but does NOT log in)
  const register = (email: string, name: string, password: string) => {
    const newUser = { email, name, password };  // Include password
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Avoid duplicate registration
    const exists = users.find((u: User) => u.email === email);
    if (exists) {
      alert('User already registered. Please log in.');
      return false; // Registration failed
    }

    // Add new user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true; // Return success
  };

  // Login searches user list and logs them in
  const login = (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: User) => u.email === email);
  
    if (!found) {
      throw new Error('No user found with this email');
    }
  
    // Verify password (in a real app, use proper password hashing)
    if (found.password !== password) {
      throw new Error('Incorrect password');
    }
  
    setUser(found);
    localStorage.setItem('loggedInUser', JSON.stringify(found));
  };
  // Logout clears everything
  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
