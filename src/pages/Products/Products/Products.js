import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const breakfast = () => {
        const ibreakfast = allProducts.slice(0, 6);
        setProducts(ibreakfast)

    }

    const lunch = () =>{
        const iLunch = allProducts.slice(6, 12);
        setProducts(iLunch)
    }

    const dinner = () =>{
        const iDinner = allProducts.slice(12, 18);
        setProducts(iDinner);
    }

    return (
        <div className=''>
            <div className='my-4 text-center'>
                <button onClick={breakfast} className='btn btn-light bg-white border-0 mx-2'>Breakfast</button>
                <button onClick={lunch} className='btn btn-light bg-white border-0 mx-2'>Lunch</button>
                <button onClick={dinner} className='btn btn-light bg-white border-0 mx-2'>Dinner</button>
            </div>
            <div className='products container text-center'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;