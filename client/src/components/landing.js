import React from 'react';
import { CheckCircle } from 'lucide-react';

function Landing() {
  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How BrailleSync Works
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8">
            Our innovative technology transforms the way visually impaired individuals 
            interact with written text through a seamless, intuitive process.
          </p>
          <div className="space-y-4">
            {[
              "Advanced optical Braille pattern recognition",
              "Instant text conversion with 99.9% accuracy",
              "Customizable audio output with multiple voices",
              "Compact, portable design for on-the-go use"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-blue-600 w-5 md:w-6 h-5 md:h-6" />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
            Learn More
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/api/placeholder/600/500" 
            alt="BrailleSync Technology" 
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;