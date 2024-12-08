import React from 'react';
import HomeIcon from "../assets/icons/icons8-home-16.png";
import Analytics from "../assets/icons/icons8-analytics-16.png";
import Customisation from "../assets/icons/icons8-customization-16.png";
import Image from "../assets/icons/premium_photo-1689530775582-83b8abdb5020.jpeg";

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow">
    <div className="flex items-center gap-8">
      <div className="text-lg font-bold text-indigo-600 transform transition-transform duration-300 hover:scale-110">
        UIROLL
      </div>

      <a
        href="/analytics"
        className="text-gray-600 hover:text-indigo-600 flex gap-1 transform transition-transform duration-300 hover:scale-105"
      >
        <img src={HomeIcon} alt="Home Icon" />
        Home
      </a>
      <a
        href="/analytics"
        className="text-gray-600 hover:text-indigo-600 flex gap-1 transform transition-transform duration-300 hover:scale-105"
      >
        <img src={Analytics} alt="Analytics Icon" />
        Analytics
      </a>
      <a
        href="/customization"
        className="text-gray-600 hover:text-indigo-600 flex gap-1 transform transition-transform duration-300 hover:scale-105"
      >
        <img src={Customisation} alt="Customization Icon" />
        Platform Customization
      </a>
    </div>

    <nav className="flex items-center gap-6">
      <input
        type="text"
        placeholder="Search here..."
        className="w-[150px] px-2 py-1 border border-gray-300 bg-slate-200 rounded-full outline-none text-sm transform transition-transform duration-300 hover:scale-105"
      />

      <div className="flex gap-1 text-gray-600 transform transition-transform duration-300 hover:scale-105">
        <span>Name</span>
        <img src={Image} alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </nav>
  </header>
);

export default Header;
