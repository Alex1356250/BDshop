import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">BDExchange</span>
            </div>
            <p className="text-sm">
              La première plateforme d'échange de bandes dessinées en France.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/search" className="hover:text-white">Rechercher</Link></li>
              <li><Link to="/nouveautes" className="hover:text-white">Nouveautés</Link></li>
              <li><Link to="/cart" className="hover:text-white">Panier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/cgv" className="hover:text-white">CGV</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BDExchange. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}