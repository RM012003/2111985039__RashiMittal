import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeItemFromCart } from '../actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    const removeItem = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.items.length > 0 ? (
                <ul>
                    {cart.items.map(item => (
                        <li key={item._id}>
                            <h2>{item.product.name}</h2>
                            <p>{item.product.description}</p>
                            <p>${item.product.price}</p>
                            <button onClick={() => removeItem(item._id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
