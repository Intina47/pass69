'use client';
import React from 'react';

const Navbar = ({ backTitle }) => {

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-300 shadow-lg rounded-b-lg p-3 flex justify-between items-center w-full max-w-3xl z-10">
      <button  className="flex items-center space-x-2 text-gray-700 hover:text-black">
        <span className="material-icons">arrow_back</span>
        <span>{backTitle}</span>
      </button>
      <div className="text-xl font-bold">
        PASS69
      </div>
      <button  className="flex items-center">
        <img src="public/vercel.svg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
      </button>
    </div>
  );
};

export default Navbar;
