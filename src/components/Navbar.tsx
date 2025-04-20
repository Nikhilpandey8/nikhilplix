import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">TV Shows</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Movies</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">New & Popular</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">My List</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-gray-300">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <button className="flex items-center text-white hover:text-gray-300">
                <img className="h-8 w-8 rounded" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" />
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;