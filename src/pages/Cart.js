import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, decrementCart, deleteCartItem } from '../store/cart'

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <>
        <h1>Cart Page</h1>
        <div>{cart.map(product => (
            <div>title: {product.title}, qty: {product.quantity}<button onClick={() => dispatch(incrementCart(product))}>Add</button><button onClick={() => dispatch(decrementCart(product))}>Subtract</button><button onClick={() => dispatch(deleteCartItem(product.id))}>X</button></div>
        ))}</div>
        </>
    )
}
