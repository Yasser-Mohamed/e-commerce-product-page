import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";
// create global state 
const initialState = {
  cart: [],
  items: data,
  quantity: 0,
  totalPrice: 0,
  value: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // to move to next image
    nextHandel: (state) => {
      state.value = ( state.value + 1) % state.items.length ;
    },
    // to move to pre image
    preHandel: (state) => {
      state.value = ( state.value - 1 + state.items.length ) % state.items.length;
    },
    changeMainImage: (state, action) => {
      state.value = action.payload.value;
    },
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      state.quantity === 0 ? state.quantity = 0 : state.quantity -= 1;
    }
    , addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += state.quantity;
      } 
      else {
        state.cart.push(action.payload);
      }
      state.quantity =0;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
})

export const { changeMainImage,nextHandel,preHandel, increment,decrement , addToCart, removeItem } = CartSlice.actions;

export default CartSlice.reducer;