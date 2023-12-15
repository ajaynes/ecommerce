import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header";
import {
  incrementCart,
  decrementCart,
  deleteCartItem,
  changeQuantityCart,
} from "../store/cart";

function QuantityInput({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(
    cart.filter((item) => item.id === product.id)[0].quantity,
  );
  // eslint-disable-next-line no-unused-vars
  const [prevQuantity, setPrevQuantity] = useState(
    cart.filter((item) => item.id === product.id)[0].quantity,
  );

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setQuantity(Number(e.target.value));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (quantity !== prevQuantity && quantity > 0) {
        dispatch(changeQuantityCart({ product, quantity }));
      } else {
        if (confirm("Are you sure?")) {
          dispatch(deleteCartItem(product.id));
        }
      }
    }
  };

  return (
    <input
      type="text"
      value={quantity}
      onChange={handleChange}
      onKeyDown={handleEnter}
    />
  );
}

QuantityInput.propTypes = {
  product: PropTypes.object,
};

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // this rerenders the input when the increment/decrement button is clicked
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  const increment = (product) => {
    dispatch(incrementCart(product));
    reset();
  };

  const confirmationDeletion = (product) => {
    // TODO: replace with a modal
    if (confirm("Are you sure?")) {
      dispatch(deleteCartItem(product.id));
    }
    reset();
  };

  const confirmationDecrement = (product) => {
    if (product.quantity === 1) {
      confirmationDeletion(product);
    } else {
      dispatch(decrementCart(product));
    }

    reset();
  };

  return (
    <>
      <Header />
      <h1>Cart Page</h1>
      {cart.length ? (
        <div key={seed}>
          {cart.map((product) => (
            <div key={product.id}>
              title: {product.title}, qty: {product.quantity}
              <button onClick={() => increment(product)}>Add</button>
              <QuantityInput
                product={product}
                decrement={() => confirmationDeletion(product)}
              />
              <button onClick={() => confirmationDecrement(product)}>
                Subtract
              </button>
              <button onClick={() => confirmationDeletion(product)}>X</button>
            </div>
          ))}
        </div>
      ) : (
        <div>no products</div>
      )}
    </>
  );
}

Cart.propTypes = {
  product: PropTypes.object,
};
