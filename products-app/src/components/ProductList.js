import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiService';
import { useProductsContext } from '../context/ProductsContext';
import DeleteButton from './DeleteButton';

const ProductList = () => {
    const { products, setProducts } = useProductsContext();

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data.products);
        };
        getProducts();
    }, [setProducts]);

    const handleProductDeleted = (deletedProductId) =>{
        setProducts(currentProducts => currentProducts.filter(product => product.id !== deletedProductId));
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    {product.title}
                    <DeleteButton productId={product.id} onProductDeleted={handleProductDeleted} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;