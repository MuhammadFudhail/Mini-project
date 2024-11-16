import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { ShoppingCartIcon } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md" >
        <div className="flex justify-between items-center  py-1  mx-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Eco Logo" className="w-[80px] h-[80px]" />
           
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-20 text-gray-700">
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            
            <a href="#solutions" className="hover:text-green-500">Solusi AI</a>
            
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
            <a href="#language" className="hover:text-green-500 flex items-center">
           
            </a>
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-4">
            <ShoppingCartIcon className="h-6 text-gray-700" />
            <a
              href="/login"
              className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;