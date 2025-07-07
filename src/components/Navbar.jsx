import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/BrandLogo.png'; // Adjust the path if needed

const Navbar = ({ language, setLanguage }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const content = {
    en: {
      home: 'Home',
      more: 'More',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      hindi: 'हिन्दी',
    },
    hi: {
      home: 'होम',
      more: 'और',
      about: 'के बारे में',
      services: 'सेवाएं',
      contact: 'संपर्क करें',
      hindi: 'English',
    },
  };

  const text = content[language];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-blue-950 shadow-md p-4">
      {/* Hamburger for mobile */}
      <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navbar Content */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Brand Logo and Name */}
        <div className="flex items-center gap-4 pl-4">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain rounded" />
          <div className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-tight">
            <div className="block md:hidden">
              <div>R&A Legal and Insurance</div>
              
              <div>Consultancy</div>
            </div>
            <div className="hidden md:block">R&A Legal and Insurance Consultancy</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
          <HashLink
            smooth
            to="/"
            onClick={() => setDropdownOpen(false)}
            className="text-white hover:text-gray-200"
          >
            {text.home}
          </HashLink>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {text.more} ▾
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-blue-950 border rounded shadow-md z-10 w-40">
                <HashLink
                  smooth
                  to="/#About"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-[#537097]"
                >
                  {text.about}
                </HashLink>
                <HashLink
                  smooth
                  to="/#Serv"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-[#537097]"
                >
                  {text.services}
                </HashLink>
              </div>
            )}
          </div>

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setDropdownOpen(false)}
            className="bg-blue-950 text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition"
          >
            {text.contact}
          </HashLink>

          <button
            onClick={() => {
              toggleLanguage();
              setDropdownOpen(false);
            }}
            className="ml-4 bg-white text-blue-950 px-4 py-2 rounded hover:bg-gray-100 transition font-semibold"
          >
            {text.hindi}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="w-full mt-4 flex flex-col space-y-2 md:hidden">
            <HashLink smooth to="/" onClick={() => setDropdownOpen(false)} className="text-white hover:text-gray-200">
              {text.home}
            </HashLink>

            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-white text-left focus:outline-none"
            >
              {text.more} ▾
            </button>

            {isDropdownOpen && (
              <div className="bg-white border rounded shadow-md z-10 w-full">
                <HashLink
                  smooth
                  to="/#About"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {text.about}
                </HashLink>
                <HashLink
                  smooth
                  to="/#Serv"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {text.services}
                </HashLink>
              </div>
            )}

            <HashLink
              smooth
              to="/#contact"
              onClick={() => setDropdownOpen(false)}
              className="bg-blue-950 text-white px-4 py-2 rounded border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition"
            >
              {text.contact}
            </HashLink>

            <button
              onClick={() => {
                toggleLanguage();
                setDropdownOpen(false);
              }}
              className="mt-2 bg-white text-blue-950 px-4 py-2 rounded hover:bg-gray-100 transition font-semibold"
            >
              {text.hindi}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
