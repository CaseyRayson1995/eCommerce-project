import React, { useState, useEffect } from "react";

function Shirt() {
  const [shirt, setShirt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        const shirtsInventory = data.products
          .filter((product) => product.type === "Shirt")
          .slice(10, 20); 
        setShirt(shirtsInventory);
      });
  }, []);  

  return (
    <div>
      <h2>Shirtinventory</h2>
      <ul>
        {shirt.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shirt;