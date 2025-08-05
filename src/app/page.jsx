"use client"

import styles from "./page.module.css"
import { productsData } from "../data/product.js"
import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard/ProductCard.jsx"


export default function Page() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        // Simular carregamento (opcional - pode ser síncrono)
        setProducts(productsData);
    }, []);

    // Atualizar contador automaticamente quando produtos mudarem
    useEffect(() => {
        setProductCount(products.length);
    }, [products]);

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} title={product.title} image={product.image} price={product.price} description={product.description} count={product.count} reviews={product.rating.reviews} score={product.rating.count}/>
                ))}
            </div>
        </div>
    )
}