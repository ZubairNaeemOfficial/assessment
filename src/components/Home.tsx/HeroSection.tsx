"use client"; 

import React from 'react';
import Image from 'next/image';
import arrow from '../images/arrow.png';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-900 to-black flex items-center justify-center">
      <h1 className="text-white text-3xl sm:text-3xl md:text-5xl font-bold relative">
        <span className="text-orange-500">저희</span>에게 맡기세요
        <span className="absolute -top-4 md:right-2 sm:right-0 right-0 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 inline-block bg-orange-500 rounded-full text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </h1>

      {/* Floating Button on the Right */}
      <div className="absolute top-1/4 right-10 hidden md:flex">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-red-600 text-white rounded-full p-3 flex flex-col items-center justify-center">
          <button className="text-sm">
            제작<br /> 문의하기 
          </button>
          <Image className="m-auto" alt="arrow icon" src={arrow} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
