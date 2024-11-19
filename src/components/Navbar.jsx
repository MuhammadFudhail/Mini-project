import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=''>
      <nav className="bg-white shadow-2xl">
        <div className="flex justify-between items-center py-1 mx-4 lg:mx-20">
         
          <div className="flex items-center">
            <img src={logo} alt="Eco Logo" className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]" />
          </div>

          
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

         
          <div className={`hidden lg:flex items-center gap-20 text-gray-700`}>
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            <Link to="/chat" className="hover:text-green-500">Solusi AI</Link>
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
          </div>

          
          <div className="hidden lg:flex items-center gap-4">
            <a href="/login" className="text-white bg-[#299e63] px-4 py-2 rounded-md hover:bg-green-700">Login</a>
          </div>
        </div>

        
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col items-start gap-4 p-4 text-gray-700">
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            <Link to="/chat" className="hover:text-green-500">Solusi AI</Link>
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
            <a href="/login" className="text-white bg-[#299e63] px-4 py-2 rounded-md hover:bg-green-700">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
