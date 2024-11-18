import { Instagram, InstagramIcon, Linkedin } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242c34] text-gray-100 py-6 mt-24 h-48 flex justify-between items-center px-8 ">
      <div className=" px-4 flex md:flex-row justify-between items-center mx-20">
        <div className="mb-4 md:mb-0 flex ">
          <h1 className="text-4xl font-bold text-white"><span className="text-[#299e63]">Eco</span>Cycle</h1>
        </div>
      </div>
      <div className="flex items-center gap-6 cursor-pointer">
      <InstagramIcon className="w-8 h-20" />
      
      <Linkedin className="w-8 h-20" />
      <ImWhatsapp  className="w-8 h-20" />
      </div>

      <div className=" text-md  mx-20 py-6 rounded-md p-2 w-80 text-center">
          &copy; {new Date().getFullYear()} EcoCycle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
