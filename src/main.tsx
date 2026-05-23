import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Mark2 from "./pages/Mark2";

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
      path: "/xx99-mark-two-headphones",
      element: <Mark2 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(<App />);