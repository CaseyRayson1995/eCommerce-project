import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage"; 
import Jewlery from "./Pages/Jewlery";
import Shirts from "./Pages/Shirts";
import Pants from "./Pages/Pants";
import App from "./App";
import ProductsPage from "./Component/ProductsPage";
import ProductList from "./ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductList/>,
        
      },
      {
        path: "/products",
        element: <ProductsPage />,
        
      },
      // {
      //   path: "/Pants/:id",
      //   element: <Pants />,
        
      // },
      // {
      //   path: "/Shirts/:id",
      //   element: <Shirts />,
        
      // },
    ]
  },
  
]);

export default router;
