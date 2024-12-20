import { create } from 'zustand';
import { Comic } from '../types/comic';

interface CartStore {
  items: Comic[];
  addItem: (comic: Comic) => void;
  removeItem: (comicId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (comic) => set((state) => ({ 
    items: [...state.items, comic] 
  })),
  removeItem: (comicId) => set((state) => ({ 
    items: state.items.filter(item => item.id !== comicId) 
  })),
  clearCart: () => set({ items: [] }),
}));