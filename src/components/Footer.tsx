import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-bold">SNICKERS</span>
            </div>
            <p className="text-amber-200 leading-relaxed">
              O'zbekistondagi eng yaxshi shokolad brendidan lazzatli mahsulotlar
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Tezkor havolalar</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors duration-300">Bosh sahifa</a></li>
              <li><a href="#products" className="text-amber-200 hover:text-white transition-colors duration-300">Mahsulotlar</a></li>
              <li><a href="#recipes" className="text-amber-200 hover:text-white transition-colors duration-300">Retseptlar</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors duration-300">Aloqa</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Mahsulotlar</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-300">Asl Snickers</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-300">Snickers Bodom</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-300">Snickers Muzqaymoq</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-300">Barchasi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-300">Aloqa ma'lumotlari</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                <span className="text-amber-200">Toshkent sh., Chilonzor t., Bunyodkor ko'chasi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <span className="text-amber-200">+998 (71) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <span className="text-amber-200">info@snickers.uz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-3 text-amber-300">Yangiliklar uchun obuna bo'ling</h3>
            <p className="text-amber-200">Eng so'nggi mahsulotlar va takliflar haqida birinchi bo'lib bilib oling</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email manzilingiz"
              className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-amber-200 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105">
              Obuna
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Snickers Uzbekistan. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;