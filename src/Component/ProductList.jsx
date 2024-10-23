import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  text-align: center; /* Center align content */
  margin: 0 auto; /* Center the container */
`;

const Row = styled.div`
  display: flex;
  justify-content: center; /* Center items within the row */
  margin-bottom: 20px; /* Space between rows */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
`;

const ProductList = () => {
  const { products } = useOutletContext();

  const getTopThreeByType = (type) => {
    const filteredProducts = products.filter(
      (product) => product.type.toLowerCase() === type.toLowerCase()
    );
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
        {jewelryProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
      <Row className="product-row">
        {shirtProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
      <Row className="product-row">
        {pantsProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
