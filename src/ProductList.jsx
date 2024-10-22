import React, { useState, useEffect } from "react";
import productsData from "./db.json";
import './ProductList.css';
import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard"
import styled from "styled-components";

const Container = styled.div`
display: block;
`

const Row = styled.div`

display: flex
`
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
    <Container className="product-container">

        

      <Row className="product-row">
        <Link to="/products?type=jewlery">See All Jewlery</Link>
        {jewelryProducts.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
        </Row>
      <Row className="product-row">
        <Link to="/products?type=shirt">See All shirts</Link>
        {shirtProducts.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
        </Row>
      <Row className="product-row">
        <Link to="/products?type=pants">See All Pants</Link>
        {pantsProducts.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;