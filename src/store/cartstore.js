import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (item) => {
        set({
          cart: [...get().cart, { ...item } ]
        })
      },
      
      removeItem: (id) => {
          set({
            cart: get().cart.filter((cartItem) => id !== cartItem.id)
          })
          },
          updateItemQuantity: (id, quantity) => {
            if (quantity <= 1) {
                get().removeItem(id)
            } else {
              set({
                  cart: get().cart.map((cartItem) => cartItem.id === id ? {...cartItem, quantity} : cartItem)
              })
            }
        },
        inCart: (id) => {
            return get().cart.some((cartItem) => cartItem.id === id)
          },
        clearCart: () => {
          set({
              cart: []
          })
      },
        totalUniqueItems: () => {
          return get().cart.length()
      },
        totalItems: () => {
          return get().cart.reduce((total, items)=> total + (items.quantity || 1), 0)
        },
      totalPrice: () => {
        return get().cart.reduce((total, items) => {
            const quantity = 
          })
        }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
