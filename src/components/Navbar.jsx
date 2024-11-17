import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center py-1 mx-20">
          <div className="flex items-center">
            <img src={logo} alt="Eco Logo" className="w-[80px] h-[80px]" />
          </div>

          <div className="flex items-center gap-20 text-gray-700">
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            <Link to="/chat" className="hover:text-green-500">Solusi AI</Link>
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
            <a href="#language" className="hover:text-green-500 flex items-center"></a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
