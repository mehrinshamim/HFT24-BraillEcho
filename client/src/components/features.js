import React from 'react';
import { Scan, Volume2, Globe, Shield } from 'lucide-react';

function Features() {
  const featureList = [
    {
      icon: <Scan className="w-12 h-12 text-blue-600" />,
      title: "Precision Scanning",
      description: "Ultra-high resolution optical recognition capturing even the most subtle Braille textures."
    },
    {
      icon: <Volume2 className="w-12 h-12 text-blue-600" />,
      title: "Natural Audio",
      description: "Advanced neural text-to-speech with customizable voice profiles and emotional intelligence."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Multilingual Support",
      description: "Comprehensive language detection and conversion across 40+ global languages and dialects."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Secure Processing",
      description: "End-to-end encryption and privacy protection for all scanned and converted documents."
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Revolutionary Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;