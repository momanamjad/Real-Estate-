import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32  bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:1/3 mb-8 md:mb-0 ">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            We work to build up a new dream of your life .A home for new
            generation.
          </p>
        </div>
        <div className="w-full md:w1/5 mb-8 md:mb-4 ">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400  ">
            <a href="#Header" className="hover:text-white">Home</a>
            <a href="#About" className="hover:text-white">About us</a>
            <a href="#Contact" className="hover:text-white">Contact us</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
         <p className=" mx-w-80 text-gray-400 mb-4 ">The Latest news articles and resources sent to your inbox weekly</p>
        <div className="flex gap-2">
           <input className="p-2 rounded bg-gray-800 w-full md:w-auto text-gray-400 border border-gray-700 focus:outline-none" type="email" placeholder="Enter your email"/>
        <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
        </div>
        
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">  
       CopyRight 2025. All rights reserved.
      </div>
    </div>  
  );
};

export default Footer;
