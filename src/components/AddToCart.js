import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../store/cart'
export default function AddToCart({data}) {
    // console.log(data)
    const [quantity, setQuantity] = useState(0);
    const [formData, setFormData] = useState(data);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);


    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setQuantity(Number(e.target.value))
         }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToCart({...formData, quantity}));
    }

    console.log(cart)
    return (
        <>
        <form className="add-to-cart-form" onSubmit={handleSubmit}>
            <button type="button" onClick={decrement}>-</button>
            <input type="text" value={quantity} onChange={(handleChange)} />
            <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
            <button type="submit">Add to Cart</button>
        </form>
        quantity: {quantity}
        </>
    )
}
