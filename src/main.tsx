import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./components/CartContext";

import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Product from "./pages/Product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/headphones",
      element: <Headphones />,
    },
    {
      path: "/speakers",
      element: <Speakers />,
    },
    {
      path: "/earphones",
      element: <Earphones />,
    },
    {
      path: "/:productname",
      element: <Product />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);