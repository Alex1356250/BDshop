import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Trash2 } from 'lucide-react';

export function Cart() {
  const { items, removeItem, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Votre Panier</h2>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Votre panier est vide</p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="p-6 flex items-center">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-24 w-24 object-cover rounded"
                  />
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.publisher}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{item.price}€</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Total</span>
              <span className="text-2xl font-bold">{total.toFixed(2)}€</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Vider le panier
              </button>
              <button className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Procéder au paiement
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}