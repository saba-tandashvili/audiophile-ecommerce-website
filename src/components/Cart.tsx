import { useState } from "react";
import { useCart } from "./CartContext";

type CartProps = {
  showCart: boolean;
};

export default function Cart({ showCart }: CartProps) {
  const { cartItems, removeFromCart } = useCart();

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}),
  );

  const updateQuantity = (id: number, delta: number) => {
    const currentQty = quantities[id] || 1;

    if (currentQty === 1 && delta === -1) {
      removeFromCart(id);
      return;
    }

    setQuantities((prev) => ({
      ...prev,
      [id]: currentQty + delta,
    }));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + item.price * qty;
  }, 0);

  return (
    <div className={showCart ? "cart" : "cart hidden"}>
      <div className="top">
        <h2>CART ({cartItems.length})</h2>
        <button>Remove all</button>
      </div>

      <div className="items">
        {cartItems.map((item) => {
          const itemQty = quantities[item.id] || 1;

          return (
            <div key={item.id} className="item">
              <div className="left">
                <img src={item.image.desktop} alt={item.name} />
                <div className="info">
                  <h2>{item.cartName}</h2>
                  <p>$ {(item.price * itemQty).toLocaleString()}</p>
                </div>
              </div>
              <div className="amount">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <p>{itemQty}</p>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bottom">
        <div className="total">
          <p>TOTAL</p>
          <span>$ {totalPrice.toLocaleString()}</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
