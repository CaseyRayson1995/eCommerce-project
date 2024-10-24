import React, { useState } from "react";
import { useOutletContext } from "react-router";
import styled from "styled-components";

const FormContainer = styled.div`
    margin: 40px auto; /* Center the form with top margin */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    max-width: 400px; /* Set a maximum width for the form */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 8px; /* Slightly reduce padding */
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 8px; /* Slightly reduce padding */
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 8px; /* Slightly reduce padding */
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical; /* Allow vertical resizing only */
    min-height: 80px; /* Set a minimum height for the textarea */
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px; /* Slightly reduce padding */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductForm = () => {
    const [newProduct, setNewProduct] = useState({ name: "", price: "", type: "", description: "", image: "" });
    const { handleProduct } = useOutletContext(); // This gets handleProduct from the parent 

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:6001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        .then((response) => response.json())
        .then((data) => {
            handleProduct(data); // Add the new product to the product list
            setNewProduct({ name: "", price: "", type: "", description: "", image: "" }); // Reset the form fields
        })
        .catch((error) => {
            console.error('Error adding product:', error);
        });
    };

    return (
        <FormContainer>
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
                <StyledInput
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleChange}
                />
                <SubmitButton type="submit">Add Product</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default ProductForm;
