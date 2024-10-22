import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const CategoryContainer = styled.div`
    margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
    margin-bottom: 15px;
`;

const ProductRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center items in the row */
`;

const ProductCategory = ({ title, products, onMoreDetails }) => {
    return (
        <CategoryContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <ProductRow>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onMoreDetails={onMoreDetails} />
                ))}
            </ProductRow>
        </CategoryContainer>
    );
};

export default ProductCategory;
