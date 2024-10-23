import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: center;
    background-color: #f9f9f9;
    max-width: 250px;
    margin: 10px; /* Add some spacing between cards */
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
    color: #333;
`;

const Price = styled.p`
    margin: 5px 0;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductDetails = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:6001/products/${id}`)
        .then ((response) => response.json())
        .then ((data) => setProduct(data))
        .catch((error) => console.log(error))
    },[])
    if(!product){
        return(
            <h2>Loading</h2>
        )
    }
    return (
        <Card>
            {product.image && <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />}
            <Title>{product.name}</Title>
            <Price>Price: ${product.price}</Price>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            
        </Card>
    );
};

export default ProductDetails;