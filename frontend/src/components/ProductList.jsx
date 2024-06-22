import React, { useEffect, useState } from 'react';
import { getProducts } from '../config/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.product_id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
