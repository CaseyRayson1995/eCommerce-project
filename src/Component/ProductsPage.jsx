import React from "react"
import { useLocation, useOutletContext } from "react-router-dom"

function ProductsPage() {
    const { products } = useOutletContext()
    const params = useLocation()
    const type= params.search.replace("?type=","")
    const filteredProducts = products.filter((product) => ( type==="jewlery"&&["Ring", "Necklace", "Earrings", "Bracelet", "Pendant Necklace"].includes(product.type) )|| product.type.toLowerCase() === type.toLowerCase());
    
    return (<div>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            {product.image && <img src={product.image} alt={product.name} />}
          </div>
        ))}

    </div>
    )
}

export default ProductsPage