import React, { useState, useContext } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-900/95 to-orange-900/95 backdrop-blur-md border-b border-amber-700/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
      <img src="https://www.snickers.com/sites/g/files/fnmzdf616/files/Snickers_NFL_Lockups-horizontal-01_2023%20%281%29.png" width={150} alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium">Bosh sahifa</a>
            <a href="#products" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium">Mahsulotlar</a>
            <a href="#recipes" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium">Retseptlar</a>
            <a href="#contact" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium">Aloqa</a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-amber-800/50 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium py-2">Bosh sahifa</a>
              <a href="#products" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium py-2">Mahsulotlar</a>
              <a href="#recipes" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium py-2">Retseptlar</a>
              <a href="#contact" className="text-white hover:text-amber-300 transition-colors duration-300 font-medium py-2">Aloqa</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;