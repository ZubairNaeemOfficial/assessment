"use client"; // Add this line to indicate that this is a client component

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/Isolation_Mode.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for toggling the mobile menu

  return (
    <nav className="bg-black text-white md:px-8 sm:px-0 px-0">
      <div className="container mx-auto px-md-4 px-sm-1 px-1">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Burger Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-400">스튜디오</a>
            <a href="#" className="hover:text-gray-400">워크러너</a>
            <a href="#" className="hover:text-gray-400">음식의식</a>
            <a href="#" className="hover:text-gray-400">액션게임</a>
            <a href="#" className="hover:text-gray-400">영상제작소</a>
            <a href="#" className="hover:text-gray-400">공식사장</a>
            <a href="#" className="hover:text-gray-400">제품목록</a>
          </div>

          {/* Right-side Login for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-400">로그인</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="#" className="hover:text-gray-400">스튜디오</a>
              <a href="#" className="hover:text-gray-400">워크러너</a>
              <a href="#" className="hover:text-gray-400">음식의식</a>
              <a href="#" className="hover:text-gray-400">액션게임</a>
              <a href="#" className="hover:text-gray-400">영상제작소</a>
              <a href="#" className="hover:text-gray-400">공식사장</a>
              <a href="#" className="hover:text-gray-400">제품목록</a>
              <a href="#" className="hover:text-gray-400">로그인</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
