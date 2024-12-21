import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, BookOpen } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">BDExchange</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-200">Accueil</Link>
            <Link to="/search" className="hover:text-indigo-200">Rechercher</Link>
            <Link to="/nouveautes" className="hover:text-indigo-200">Nouveautés</Link>
            <Link to="/admin" className="hover:text-indigo-200">Admin</Link>
            <Link to="/cart" className="relative hover:text-indigo-200">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-indigo-200">Accueil</Link>
            <Link to="/search" className="block hover:text-indigo-200">Rechercher</Link>
            <Link to="/nouveautes" className="block hover:text-indigo-200">Nouveautés</Link>
            <Link to="/admin" className="block hover:text-indigo-200">Admin</Link>
            <Link to="/cart" className="block hover:text-indigo-200">
              Panier ({cartItems.length})
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}