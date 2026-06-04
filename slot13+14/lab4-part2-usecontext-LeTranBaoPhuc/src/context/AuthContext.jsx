import { createContext, useState, useContext } from 'react';
import USERS from '../data/users';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = (email, password) => {
    setLoading(true);
    setError('');

    setTimeout(() => {
      const foundUser = USERS.find(u => u.email === email && u.password === password);
      if (foundUser) {
        setUser(foundUser);
        setLoading(false);
      } else {
        setError('Email hoặc mật khẩu không đúng.');
        setLoading(false);
      }
    }, 800);
  };

  const logout = () => {
    setUser(null);
    setError('');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
