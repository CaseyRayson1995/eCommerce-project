import React, { useState, useEffect } from "react";

function Pants() {
  const [pants, setPants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        
        const pantsInventory = data.products.slice(20); 
        setPants(pantsInventory);
      });
  }, []); 

  return (
    <div>
      <h2>Pants inventory</h2>
      <ul>
        {pants.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pants;
