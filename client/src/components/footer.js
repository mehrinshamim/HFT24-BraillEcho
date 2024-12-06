import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-full sm:col-span-2 lg:col-span-1 mb-6 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4 text-blue-500">BrailleSync</h3>
          <p className="text-gray-400 text-sm md:text-base">
            Bridging communication barriers through innovative accessibility technology.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Features", "Technology", "Support"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 text-sm md:text-base hover:text-blue-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Service", "Accessibility Statement"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 text-sm md:text-base hover:text-blue-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-full lg:col-span-1">
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook className="w-6 h-6" />, link: "#" },
              { icon: <Twitter className="w-6 h-6" />, link: "#" },
              { icon: <Linkedin className="w-6 h-6" />, link: "#" },
              { icon: <Mail className="w-6 h-6" />, link: "#" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="text-gray-300 hover:text-blue-500 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-800 pt-6">
        <p className="text-gray-500 text-sm">
          © 2024 BrailleSync. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;