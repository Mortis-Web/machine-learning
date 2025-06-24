// src/context/ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  };
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.body.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
