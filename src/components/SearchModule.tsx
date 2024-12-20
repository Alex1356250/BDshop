import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useComics } from '../context/ComicsContext';
import { Comic } from '../types/comic';

export function SearchModule() {
  const [searchType, setSearchType] = useState<'title' | 'location'>('title');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Comic[]>([]);
  const { searchComics, searchByLocation } = useComics();

  const handleSearch = () => {
    if (searchType === 'title') {
      setResults(searchComics(searchQuery));
    } else {
      // Simplified location search using Paris coordinates
      setResults(searchByLocation(48.8566, 2.3522));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                searchType === 'title' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200'
              }`}
              onClick={() => setSearchType('title')}
            >
              <Search className="inline-block mr-2 h-5 w-5" />
              Par titre
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                searchType === 'location' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200'
              }`}
              onClick={() => setSearchType('location')}
            >
              <MapPin className="inline-block mr-2 h-5 w-5" />
              Par localisation
            </button>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder={
                searchType === 'title' 
                  ? 'Rechercher une BD...' 
                  : 'Entrez une adresse...'
              }
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Rechercher
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((comic) => (
            <div key={comic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={comic.cover} 
                alt={comic.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{comic.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{comic.synopsis}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-indigo-600 font-medium">{comic.price}€</span>
                  <span className="text-sm text-gray-500">{comic.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}