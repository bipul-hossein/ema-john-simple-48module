import React from 'react';

const Cart = (props) => {
    return (
        <div>
             <h2>This is the cart Container</h2>
                <p>selected items:{props.cart.length}</p>
        </div>
    );
};

export default Cart;