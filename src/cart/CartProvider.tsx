import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { safeParseCart, STORAGE_KEY } from "./cartStorage";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;

  addToCart: (
    product: { slug: string; name: string; price: number; image: string },
    quantity?: number
  ) => void;
  removeAll: () => void;
  increment: (slug: string) => void;
  decrement: (slug: string) => void;

  totalItemsCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    safeParseCart(localStorage.getItem(STORAGE_KEY))
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart: CartContextValue["addToCart"] = (product, quantity = 1) => {
    const qtyToAdd = Math.max(1, Math.floor(quantity || 1));

    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.slug === product.slug);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qtyToAdd };
        return next;
      }

      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: qtyToAdd,
        },
      ];
    });
  };

  const removeAll = () => setCartItems([]);

  const increment = (slug: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (slug: string) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.slug !== slug) return item;
          const nextQty = item.quantity - 1;
          if (nextQty <= 0) return null;
          return { ...item, quantity: nextQty };
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );


  const value: CartContextValue = {
    cartItems,
    isCartOpen,
    setCartOpen,
    addToCart,
    removeAll,
    increment,
    decrement,
    totalItemsCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

