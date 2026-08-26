import { products } from "../data/products.js";
import { persist } from "zustand/middleware";
import { create } from "zustand";

export const useShop = create()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (product, opts = {}) =>
        set((state) => {
          const qty = opts.quantity ?? 1;

          const existing = state.cart.find(
            (item) =>
              item.product.id === product.id &&
              item.size === opts.size &&
              item.flavor === opts.flavor,
          );

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item === existing
                  ? { ...item, quantity: item.quantity + qty }
                  : item,
              ),
            };
          }

          return { //if the product does not already exist in the cart
            cart: [
              ...state.cart,
              {
                product,
                quantity: qty,
                ...opts,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== id),
        })),

      updateQuantity: (id, quantity) => //product id & new quantity
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.product.id === id
                ? {
                    ...item,
                    quantity: Math.max(0, quantity), //update quantity
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ cart: [] }),

      toggleWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.includes(id)
            ? state.wishlist.filter((wishId) => wishId !== id) //filter out product with this id if its already on the wishlist, otherwise add it to the wishlist
            : [...state.wishlist, id],
        })),

      isWishlisted: (id) => get().wishlist.includes(id),
    }),
    {
      name: "sweet-nothings-shop",
    },
  ),
);

export const cartCountSelector = (state) =>
  state.cart.reduce((sum, item) => sum + item.quantity, 0);

export const cartTotalSelector = (state) =>
  state.cart.reduce(
    (sum, item) =>
      sum +
      (item.product.discountedPrice ?? item.product.price) * item.quantity,
    0,
  );
