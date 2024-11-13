import React, { useState } from 'react';
import logo from '../assets/logo.png';
// import troli from '../assets/troli.png';
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';




const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  

  return (
    
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md ">
        <div className=" flex justify-between items-center mx-11">
          {/* Logo */}
          <div className="text-white text-lg font-semibold flex items-center">
          <img src={logo} alt="Eco Logo" className="w-[80px] h-[80px]" />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center space-x-5">
            <input
              type="text"
              placeholder="Cari di Ecocycle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 w-[500px] rounded-md border border-gray-500 focus:outline-none focus:ring-3 focus:ring-blue-500 " />
           
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-700"
            >
              Search
            </button>
          </form>

          {/* Login Button */}
          <div className='flex items-center gap-7  mx-4 '>
            <ShoppingCartIcon className='  h-8 border-r border-black mx-4' />
            <a
              href="/login"
              className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 "
            >
              Login
            </a>
          </div>
          
        </div>
        {/* <div className="w-[25px] h-[25px] absolute top-6 left- ">
          <img src={troli} alt="Eco Logo" />
        </div> */}
      </nav>

     
    </div>
  );
};

export default Navbar;
