import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../layout/RootLayout";

import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ArticulosPage } from "../pages/ArticulosPage";
import { CartPage } from "../pages/CartPage"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "nosotros",
        element: <AboutPage />,
      },
      {
        path: "productos",
        element: <ArticulosPage />,
      },
      {
        path: "cart",       
        element: <CartPage />, 
      },
      {
        path: "checkout",
        element: <div>Checkout</div>,
      },
    ],
  },
]);
