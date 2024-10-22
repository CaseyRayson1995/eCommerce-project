import React, { useState, useEffect } from "react"

const productSearch = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [productFilter, setProductFilter] = useState([]);

    useEffect(() => {
        const fetchedProducts = async ( => {
            const response = await fetch("http://localhost:3000/products")
            const products = await response.json();
            setProducts(products)
            setProductFileter(products)
        })
    }, [])
        fetchedProducts()
        
    }

useEffect(() => {
    const filter = products.filter(product => 
        product.name(search) || product.description(search)
    )
    setProductFilter(filter)
    [search, products]

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
})
return (
    <div>
        <input>
        
        </input>
    </div>
)