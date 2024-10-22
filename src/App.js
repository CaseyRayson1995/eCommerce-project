import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Outlet } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then((response) => response.json())
      .then((data) => {
        
       
        setProducts(data);
      });
  }, []); 
  return (
    <div>
      <Outlet context= {{products}}/>
    </div>
  );
};

export default App;

