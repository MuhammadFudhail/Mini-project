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
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center mx-11 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Eco Logo" className="w-[80px] h-[80px]" />
            <span className="text-green-600 text-xl font-semibold ml-2">MallSampah</span>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-8 text-gray-700">
            <a href="#about" className="hover:text-green-500">Tentang Kami</a>
            <a href="#services" className="hover:text-green-500">Layanan</a>
            <a href="#solutions" className="hover:text-green-500">Solusi Kami</a>
            <a href="#partners" className="hover:text-green-500">Mitra</a>
            <a href="#blog" className="hover:text-green-500">Blog</a>
            <a href="#contact" className="hover:text-green-500">Kontak Kami</a>
            <a href="#language" className="hover:text-green-500 flex items-center">
              <span className="material-icons">language</span> Indonesia
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