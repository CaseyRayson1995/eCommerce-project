import React, { useState, useEffect } from "react";

function Jewelry() {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        
        const jewelryInventory = data.products.slice(0, 10); 
        setJewelry(jewelryInventory);
      });
  }, []); 

  return (
    <div>
      <h2>Jewelry inventory</h2>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jewelry;
