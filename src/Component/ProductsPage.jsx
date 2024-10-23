import React from "react";
import { useLocation, useOutletContext, } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: block;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for responsive design */
  justify-content: flex-start; /* Align items to the left */
  margin-bottom: 20px; /* Add spacing between rows */
`;

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


const ProductsPage = () => {
  const { products } = useOutletContext();
  const params = useLocation();
  const type = params.search.replace("?type=", "").toLowerCase();
  console.log(type)
  const navigate = useNavigate()
  const filteredProducts = products.filter((product) => {
    
    return (type === "jewelry" && ["Ring", "Necklace", "Earrings", "Bracelet", "Pendant Necklace"].includes(product.type)) ||
  product.type.toLowerCase() === type
  }
);

return (
  <Container>
      <Row>
        
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            {product.image && <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />}
            <Title>{product.name}</Title>
            <Price>Price: ${product.price}</Price>
            <Button onClick={() => navigate (`/products/${product.id}`)}>More Details</Button>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;

