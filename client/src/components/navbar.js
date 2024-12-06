import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Zap className="text-blue-500 w-8 h-8" />
          <span className="text-2xl font-bold text-gray-800">BrailleSync</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Technology</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Support</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Technology</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Support</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;