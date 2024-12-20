import React, { useEffect, useState } from 'react';
import { useComics } from '../context/ComicsContext';
import { Comic } from '../types/comic';

export function RandomComic() {
  const { getRandomComic } = useComics();
  const [randomComic, setRandomComic] = useState<Comic | null>(null);

  useEffect(() => {
    setRandomComic(getRandomComic());
  }, []);

  if (!randomComic) return null;

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Découverte aléatoire
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={randomComic.cover}
                alt={randomComic.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {randomComic.category}
              </div>
              <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                {randomComic.title}
              </h3>
              <p className="mt-2 text-gray-500">{randomComic.synopsis}</p>
              <div className="mt-4">
                <span className="text-gray-600">Édition: </span>
                <span className="font-medium">{randomComic.publisher}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  {randomComic.price}€
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}