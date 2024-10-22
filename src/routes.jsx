import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage"; 
// import Jewlery from "./Pages/Jewlery";
// import Shirts from "./Pages/Shirts";
// import Pants from "./Pages/Pants";
import App from "./App";
import ProductsPage from "./Component/ProductsPage";
import ProductList from "./ProductList";
import ProductDetails from "./Component/ProductDetails";
import ProductForm from './ProductForm'

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
      {
        path: "/products/:id",
        element: <ProductDetails />,
        
      },
      {
        path: "/products/new",
        element: <ProductForm />,
        
      },
    ]
  },
  
]);

export default router;
