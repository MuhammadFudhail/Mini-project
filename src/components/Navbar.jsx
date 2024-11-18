import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-2xl">
        <div className="flex justify-between items-center lg:py-1 md:py-8 py-2 lg:mx-20 md:mx-18 mx-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Eco Logo" className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]" />
          </div>

          {/* Menu Items (Hidden on Small Screens) */}
          <div className="hidden md:flex items-center gap-10 lg:gap-20 text-gray-700">
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            <Link to="/chat" className="hover:text-green-500">Solusi AI</Link>
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-white bg-[#299e63] px-4 py-2 rounded-md hover:bg-green-700">
              Login
            </a>
          </div>

          {/* Hamburger Menu (Visible on Small Screens) */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-2">
            <a href="#about" className="block py-2 text-gray-700 hover:text-green-500">Tentang Kami</a>
            <Link to="/chat" className="block py-2 text-gray-700 hover:text-green-500">Solusi AI</Link>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-green-500">Kontak Kami</a>
            <a href="/login" className="block py-2 text-white bg-[#299e63] rounded-md hover:bg-green-700">
              Login
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
