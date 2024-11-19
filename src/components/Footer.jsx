import { InstagramIcon, Linkedin } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242c34] text-gray-100 py-6 mt-24 h-48 flex flex-col md:flex-row justify-between items-center px-8">
      <div className="flex justify-between items-center w-full md:w-auto mx-4">
        <div className="mb-4 md:mb-0 flex">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-[#299e63]">Eco</span>Cycle
          </h1>
        </div>
      </div>
      
      <div className="flex items-center gap-6 cursor-pointer my-4 md:my-0">
        <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
        <ImWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      <div className="text-md text-center mx-4 md:mx-20 py-6 rounded-md p-2 w-full md:w-80">
        &copy; {new Date().getFullYear()} EcoCycle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
