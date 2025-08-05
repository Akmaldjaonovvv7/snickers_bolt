import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import RecipeIdeas from './components/RecipeIdeas';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './animations.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 overflow-x-hidden">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <ProductShowcase />
        <RecipeIdeas />
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="floating-peanut absolute top-20 left-10 w-4 h-4 bg-amber-600 rounded-full opacity-30 animate-bounce"></div>
          <div className="floating-peanut absolute top-40 right-20 w-3 h-3 bg-yellow-700 rounded-full opacity-20 animate-pulse"></div>
          <div className="floating-peanut absolute bottom-40 left-1/4 w-5 h-5 bg-amber-500 rounded-full opacity-25" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;