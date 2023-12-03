import { useSelector, useDispatch } from "react-redux";

export default function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log("file: Cart.js:7 ~ cart:", cart)

    return (
        <>
        <div>{cart.map(product => (
            <div>title: {product.title}, qty: {product.quantity}</div>
        ))}</div>
        </>
    )
}
