import React, { createContext, useContext, ReactNode } from 'react';
import { Comic } from '../types/comic';

const comicsData: Comic[] = [
  {
    id: '1',
    title: 'Astérix et Obélix',
    cover: 'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=500',
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15'
  },
  // Ajoutez plus de BD ici
];

interface ComicsContextType {
  comics: Comic[];
  getRandomComic: () => Comic;
  searchComics: (query: string) => Comic[];
  searchByLocation: (lat: number, lng: number) => Comic[];
}

const ComicsContext = createContext<ComicsContextType | undefined>(undefined);

export function ComicsProvider({ children }: { children: ReactNode }) {
  const getRandomComic = () => {
    return comicsData[Math.floor(Math.random() * comicsData.length)];
  };

  const searchComics = (query: string) => {
    return comicsData.filter(comic => 
      comic.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const searchByLocation = (lat: number, lng: number) => {
    // Simplified distance calculation
    return comicsData.filter(comic => {
      const distance = Math.sqrt(
        Math.pow(comic.location.lat - lat, 2) + 
        Math.pow(comic.location.lng - lng, 2)
      );
      return distance < 1; // Within ~111km
    });
  };

  return (
    <ComicsContext.Provider value={{ 
      comics: comicsData, 
      getRandomComic, 
      searchComics, 
      searchByLocation 
    }}>
      {children}
    </ComicsContext.Provider>
  );
}

export function useComics() {
  const context = useContext(ComicsContext);
  if (context === undefined) {
    throw new Error('useComics must be used within a ComicsProvider');
  }
  return context;
}