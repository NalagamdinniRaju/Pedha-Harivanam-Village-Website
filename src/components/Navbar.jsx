
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Our Work' },
    { path: '/team', label: 'Our Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed w-full top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`backdrop-blur-md ${isDark ? 'bg-black/50' : 'bg-white/80'} rounded-[50px] px-4 py-3 flex items-center justify-between`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full">
                <img src='https://res.cloudinary.com/dwiq4s5ut/image/upload/v1734682346/PHDY_bizxek.png' alt="Logo" />
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>PHDY</span>
            </Link>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:bg-${isDark ? 'white/10' : 'gray-200'} transition-colors text-${isDark ? 'white' : 'gray-800'}`}
              >
                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`p-2 rounded-full hover:bg-${isDark ? 'white/10' : 'gray-200'} transition-colors text-${isDark ? 'white' : 'gray-800'}`}
              >
                <FiMenu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className={`md:hidden fixed right-0 top-0 bottom-0 w-[75%] max-w-[300px] z-50 ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Menu
                </span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className={`p-2 rounded-full hover:bg-${isDark ? 'white/10' : 'gray-200'}`}
                >
                  <FiX className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className="py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`block px-4 py-3 ${
                      isActive(item.path)
                        ? 'text-green-600'
                        : isDark 
                          ? 'text-white hover:bg-white/10' 
                          : 'text-gray-800 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed w-full top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`backdrop-blur-md ${isDark ? 'bg-black/50' : 'bg-white/80'} rounded-[50px] px-6 py-4 flex items-center justify-between`}>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full">
                <img src='https://res.cloudinary.com/dwiq4s5ut/image/upload/v1734682346/PHDY_bizxek.png' alt="Logo" />
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>PHDY</span>
            </Link>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-green-600'
                      : isDark 
                        ? 'text-white' 
                        : 'text-gray-800'
                  } hover:text-green-600 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:bg-${isDark ? 'white/10' : 'gray-200'} transition-colors text-${isDark ? 'white' : 'gray-800'}`}
              >
                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}