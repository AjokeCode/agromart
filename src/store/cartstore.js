import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (item) => {
        set({
          cart: [...get().cart, { ...item }]
        });
      },

      removeItem: (id) => {
        set({
          cart: get().cart.filter((cartItem) => id !== cartItem.id)
        });
      },
      
      updateItemQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
        } else {
          set({
            cart: get().cart.map((cartItem) => 
              cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
          });
        }
      },
      
      inCart: (id) => {
        return get().cart.some((cartItem) => cartItem.id === id);
      },

      clearCart: () => {
        set({
          cart: []
        });
      },

      totalUniqueItems: () => {
        return get().cart.length;
      },

      totalItems: () => {
        return get().cart.reduce((total, item) => total + (item.quantity || 1), 0); 
      },

      cartTotal: () => {
        return get().cart.reduce((total, item) => {
          const quantity = item.quantity || 1; // Assuming there's a 'quantity' property in your items
          const price = item.price; // Assuming there's a 'price' property
          return total + (price * quantity);
      }, 0);
      }
    }),
    {
      name: 'cart-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
