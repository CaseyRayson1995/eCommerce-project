import React, { useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";

const FormContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductForm = () => {
    const [newProduct, setNewProduct] = useState({ name: "", price: "", type: "", description: "", image: "" });
    const [isFormVisible, setIsFormVisible] = useState(true);
    const { handleProduct } = useOutletContext()
    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
            handleProduct(newProduct)
        setNewProduct({ name: "", price: "", type: "", description: "", image: "" });
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };
    return (
        <FormContainer style={{ display: isFormVisible ? 'block' : 'none' }}>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <StyledSelect name="type" value={newProduct.type} onChange={handleChange} required>
                    <option value="">Select Product Type</option>
                    <option value="Ring">Ring</option>
                    <option value="Necklace">Necklace</option>
                    <option value="Earrings">Earrings</option>
                    <option value="Bracelet">Bracelet</option>
                    <option value="Pendant Necklace">Pendant Necklace</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pants">Pants</option>
                </StyledSelect>
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleChange}
                    required
                />
                <StyledInput
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={handleChange}
                    required
                />
                <StyledTextarea
                    name="description"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Add Product</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default ProductForm;

