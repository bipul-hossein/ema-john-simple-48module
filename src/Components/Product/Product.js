import React from 'react';
import './Product.css'

const Product = (props) => {
   
    const {product, handleAddToCart} =props;
    const {name, price, seller, ratings, img} = product;
    console.log(product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-datails'>
            <h3 className='header-name'>{name}</h3>
            <h5>Price: {price}</h5>
            <p>Manufactural: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <h4>Add To Cart</h4>
            </button>
        </div>
    );
};

export default Product;