import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Component/NavBar";
const App = () => {
  const[sortProducts,setSortProducts]=useState(false)
  
  function handleClick(){
    setSortProducts(!sortProducts)
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/products")
      .then((response) => response.json())
      .then((data) => {
        
       
        setProducts(data);
      });
  }, []); 
  function handleProduct(newProduct){
    setProducts(current=> [...current, newProduct]);
  }
  return (
    <div>
      <NavBar />
      <Outlet context= {{products,handleProduct}}/>
    </div>
  );
};

export default App;

