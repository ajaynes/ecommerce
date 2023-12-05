import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    incrementCart: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCart: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const index = state.findIndex((product) => product.id === action.payload.id);
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      }
    },
    deleteCartItem: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});
export const { addToCart, incrementCart, decrementCart, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
