import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    const { name, image, salary } = cart;
    
    return (
        <div className="selectedPlayer">
            <div>
                <img src={image} alt=""/>
                <h3> {name}</h3>
                <p>Salary: ${salary}</p>
            </div>
        </div>

    );
};

export default Cart;