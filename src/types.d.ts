export type Product = {
  id: string;
  name: string;
  price: number;
  cartName: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

export type CartItem = Product & {
  quantity: number;
};