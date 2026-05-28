import { createContext, useContext, useState, type JSX } from "react";
import type { Product, CartItem } from "../types";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

type CartProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(product: Product & { quantity?: number }) {
    const qty = product.quantity ?? 1;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item,
        );
      }

      return [...prev, { ...product, quantity: qty }];
    });
  }

  function removeFromCart(id: string) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
