import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCart, decrementCart, deleteCartItem } from '../store/cart'

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const confirmationDeletion = (product) => {
        if (confirm('Are you sure?')) {
            dispatch(deleteCartItem(product.id))
        }
    }

    const confirmationDecrement = (product) => {
        if (product.quantity === 1) {
            confirmationDeletion(product)
        } else {
            dispatch(decrementCart(product))
        }
    }

    return (
        <>
        <h1>Cart Page</h1>
        <div>{cart.map(product => (
            <div>title: {product.title}, qty: {product.quantity}
            <button onClick={() => dispatch(incrementCart(product))}>Add</button>
            <button onClick={() => confirmationDecrement(product)}>Subtract</button>
            <button onClick={() => confirmationDeletion(product)}>X</button>
            </div>
        ))}</div>
        </>
    )
}
