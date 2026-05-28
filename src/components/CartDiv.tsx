import Cart from "./Cart";

type CartDivProps = {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
};

export default function CartDiv({showCart, setShowCart}: CartDivProps) {
  return (
    <div className="cart-div">
      <Cart showCart={showCart} />
      <div className={showCart ? "black" : "black hidden-black"} onClick={() => {setShowCart(false)}}></div>
    </div>
  );
}
