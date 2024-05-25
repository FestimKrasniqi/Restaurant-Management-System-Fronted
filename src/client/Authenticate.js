import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    console.log('AuthProvider: Token found on mount:', token);
    console.log('AuthProvider: Role found on mount:', storedRole);
    if (token && storedRole) {
      setIsAuthenticated(true);
      setRole(storedRole);
    }
    setLoading(false); 
  }, []);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const result = await fetch("http://localhost:8000/api/Login", {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json',
        }
      });

      if (result.ok) {
        const { token, role } = await result.json();
        localStorage.setItem('token', token);
        localStorage.setItem('role', role); 
        setIsAuthenticated(true);
        setRole(role);
        console.log('AuthProvider: Login successful, token set:', token, 'role:', role);
      } else {
        setIsAuthenticated(false);
        setRole(null);
        throw new Error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticated(false);
      setRole(null);
      throw new Error('An error occurred while logging in.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('AuthProvider: Logged out, token and role removed');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login: handleLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
