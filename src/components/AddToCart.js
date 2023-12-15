import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../store/cart";
export default function AddToCart({ data }) {
  const [quantity, setQuantity] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState(data);

  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setQuantity(Number(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...formData, quantity }));
  };

  return (
    <>
      <form className="add-to-cart-form" onSubmit={handleSubmit}>
        <button type="button" onClick={decrement}>
          -
        </button>
        <input type="text" value={quantity} onChange={handleChange} />
        <button type="button" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
        <button type="submit">Add to Cart</button>
      </form>
      quantity: {quantity}
    </>
  );
}

AddToCart.propTypes = {
  data: PropTypes.object,
};
