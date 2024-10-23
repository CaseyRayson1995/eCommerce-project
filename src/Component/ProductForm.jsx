
// function ProductForm(){
//     const [newProduct, setNewProduct] = useState({ name: "", price: "", type: "", description: "", image: "" });
//   const [isFormVisible, setIsFormVisible] = useState(true);

//   const handleChange = (e) => {
//     setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setProducts([...products, { ...newProduct, id: products.length + 1 }]);
//     setNewProduct({ name: "", price: "", type: "", description: "", image: "" });
//   };

//   const toggleFormVisibility = () => {
//     setIsFormVisible(!isFormVisible);
//   };
//     return(
//         <div>
//  <button className="toggle-button" onClick={toggleFormVisibility}>
//         {isFormVisible ? "Hide Form" : "Show Form"}
//       </button>


//       <div className="form-container" style={{ display: isFormVisible ? 'block' : 'none' }}>
//         <h2>Add New Product</h2>
//         <form onSubmit={handleSubmit}>
//           <select name="type" value={newProduct.type} onChange={handleChange} required>
//             <option value="">Select Product Type</option>
//             <option value="Ring">Ring</option>
//             <option value="Necklace">Necklace</option>
//             <option value="Earrings">Earrings</option>
//             <option value="Bracelet">Bracelet</option>
//             <option value="Pendant Necklace">Pendant Necklace</option>
//             <option value="Shirt">Shirt</option>
//             <option value="Pants">Pants</option>
//           </select>
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={newProduct.description}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Add Product</button>
//         </form>
//       </div>
            
//         </div>
//     )
// }

// export default ProductForm;