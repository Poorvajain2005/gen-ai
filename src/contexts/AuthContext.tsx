import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await new Promise<{ user: User; token: string }>((resolve) => {
        setTimeout(() => {
          if (email === 'demo@example.com' && password === 'password') {
            resolve({
              user: {
                id: '1',
                email: 'demo@example.com',
                name: 'Demo User',
                role: 'user',
              },
              token: 'demo-token-123',
            });
          } else {
            throw new Error('Invalid credentials');
          }
        }, 1000);
      });

      setUser(response.user);
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      toast.success('Successfully logged in!');
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await new Promise<{ user: User; token: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: Math.random().toString(36).substr(2, 9),
              email,
              name,
              role: 'user',
            },
            token: 'demo-token-' + Math.random().toString(36).substr(2, 9),
          });
        }, 1000);
      });

      setUser(response.user);
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      toast.success('Account created successfully!');
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/');
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    login,
    logout,
    signup,
    isLoading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
