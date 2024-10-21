import React, { useState, useEffect } from "react";
import productsData from "./db.json";
import './ProductList.css';
import { Link, useOutletContext } from "react-router-dom";

const ProductList = () => {
  const { products } = useOutletContext()

  

  const getTopThreeByType = (type) => {
    const filteredProducts = products.filter((product) => product.type.toLowerCase() === type.toLowerCase());
    return filteredProducts.slice(0, 3);
  };

  const jewelryProducts = products
    .filter((product) =>
      ["Ring", "Necklace", "Earrings", "Bracelet", "Pendant Necklace"].includes(product.type)
    )
    .slice(0, 3);

  const shirtProducts = getTopThreeByType("Shirt");
  const pantsProducts = getTopThreeByType("Pants");

  return (
    <div className="product-container">
      


      <div className="product-row">
        <Link to="/products?type=jewlery">See All Jewlery</Link>
        {jewelryProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}
        <Link to="/products?type=shirt">See All shirts</Link>
        {shirtProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}
        <Link to="/products?type=pants">See All Pants</Link>
        {pantsProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



