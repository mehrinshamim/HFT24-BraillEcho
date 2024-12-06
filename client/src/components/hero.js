import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Transform Braille <br className="hidden md:block" /> 
          <span className="text-blue-600">Into Sound</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 px-4">
          Advanced neural-network powered technology that converts Braille text 
          into crystal-clear audio with unprecedented accuracy and personalization.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full 
            flex items-center justify-center space-x-2 hover:bg-blue-700 transition">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 
            rounded-full flex items-center justify-center space-x-2 hover:bg-blue-50 transition">
            <Play className="w-5 h-5" />
            <span>Watch Video</span>
          </button>
        </div>
        <div className="mt-12 md:mt-16 relative px-4">
          <img 
            src="/api/placeholder/800/500" 
            alt="BrailleSync Device" 
            className="rounded-2xl shadow-2xl mx-auto max-w-full md:max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;