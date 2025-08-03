'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && systemTheme)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-500/25' 
          : 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/25'
        }
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark ? 'focus:ring-purple-500' : 'focus:ring-orange-500'}
        group
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <div
        className={`
          absolute w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isDark ? 'translate-x-6' : 'translate-x-0.5'}
          group-hover:shadow-lg
        `}
      >
        {/* Icon */}
        <div className="relative">
          <Sun 
            className={`
              w-3 h-3 text-amber-500 transition-all duration-300
              ${isDark ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'}
            `}
          />
          <Moon 
            className={`
              w-3 h-3 text-blue-600 absolute inset-0 transition-all duration-300
              ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'}
            `}
          />
        </div>
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun 
          className={`
            w-3 h-3 text-white/60 transition-all duration-300
            ${isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
          `}
        />
        <Moon 
          className={`
            w-3 h-3 text-white/60 transition-all duration-300
            ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
          `}
        />
      </div>
    </button>
  );
}
