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
    changeQuantity: (state, action) => {
        const item = state.find((product) => product.id === action.payload.id);
        if (item) {
            item.quantity = action.payload.quantity;
        }
    },
  },
});
export const { addToCart, toggleComplete, deleteTodo } = cartSlice.actions;
export default cartSlice.reducer;
