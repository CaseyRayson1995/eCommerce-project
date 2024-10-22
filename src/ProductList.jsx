import React, { useState } from "react";
import productsData from "./db.json"; 
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState(productsData.products);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", type: "", description: "", image: "" });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: "", price: "", type: "", description: "", image: "" });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

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
      <button className="toggle-button" onClick={toggleFormVisibility}>
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>

      <div className="form-container" style={{ display: isFormVisible ? 'block' : 'none' }}>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <select name="type" value={newProduct.type} onChange={handleChange} required>
            <option value="">Select Product Type</option>
            <option value="Ring">Ring</option>
            <option value="Necklace">Necklace</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Pendant Necklace">Pendant Necklace</option>
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div className="product-row">
        {jewelryProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}

        {shirtProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}

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